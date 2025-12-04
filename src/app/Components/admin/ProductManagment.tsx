"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "next/navigation";
interface Product {
  _id: string;
  imag1: string[];
  heading: string;
  description: string;
  price: number;
  category: string;
  colors: string[];
  sizes: string[];
  materialCare: string;
  bestSeller: boolean;
  newItem: boolean;
  affiliateLink: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // const { id } = useParams();

  const [formData, setFormData] = useState({
    imag1: [""],
    heading: "",
    description: "",
    price: "",
    category: "",
    colors: [""],
    sizes: [""],
    materialCare: "",
    bestSeller: false,
    newItem: false,
    affiliateLink: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Fetch products on component mount

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/store/getAllProduct");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handleInputChange = (
    field: string,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleArrayInputChange = (
    field: "imag1" | "colors" | "sizes",
    index: number,
    value: string
  ) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData((prev) => ({ ...prev, [field]: newArray }));
  };

  const addArrayField = (field: "imag1" | "colors" | "sizes") => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeArrayField = (
    field: "imag1" | "colors" | "sizes",
    index: number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  }; // ✅ Added missing closing brace and parenthesis
  // Get unique categories for filter
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.heading.trim())
      errors.heading = "Product heading is required";
    if (!formData.description.trim())
      errors.description = "Description is required";
    if (!formData.price || parseFloat(formData.price) <= 0)
      errors.price = "Valid price is required";
    if (!formData.category.trim()) errors.category = "Category is required";
    if (!formData.imag1[0]?.trim())
      errors.imag1 = "At least one image URL is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      imag1: [""],
      heading: "",
      description: "",
      price: "",
      category: "",
      colors: [""],
      sizes: [""],
      materialCare: "",
      bestSeller: false,
      newItem: false,
      affiliateLink: "",
    });
    setFormErrors({});
    setShowModal(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      imag1: product.imag1,
      heading: product.heading,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      colors: product.colors,
      sizes: product.sizes,
      materialCare: product.materialCare,
      bestSeller: product.bestSeller,
      newItem: product.newItem,
      affiliateLink: product.affiliateLink,
    });
    setFormErrors({});
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        colors: formData.colors.filter((color) => color.trim() !== ""),
        sizes: formData.sizes.filter((size) => size.trim() !== ""),
        imag1: formData.imag1.filter((img) => img.trim() !== ""),
      };

      if (editingProduct) {
        // Update product using axios
        const response = await axios.put(
          `/api/store/updateProduct/${editingProduct._id}`,
          productData
        );

        if (response.data.success) {
          setProducts(
            products.map((product) =>
              product._id === editingProduct._id
                ? response.data.product
                : product
            )
          );
          setShowModal(false);
        }
      } else {
        // Add new product using axios
        const response = await axios.post("/api/store/addProduct", productData);

        if (response.data.success) {
          setProducts([...products, response.data.product]);
          setShowModal(false);
        }
      }
    } catch (error) {
      console.error("Error saving product:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    if (
      confirm(
        "Are you sure you want to delete this product? This action cannot be undone."
      )
    ) {
      try {
        // ✅ FIXED: Use the id parameter
        const response = await axios.delete(`/api/store/removeProduct/${id}`);

        if (response.data.success) {
          setProducts(products.filter((product) => product._id !== id));
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  const toggleProductStatus = async (
    field: "bestSeller" | "newItem",
    id: string
  ) => {
    try {
      const product = products.find((p) => p._id === id);
      if (!product) return;

      const updatedData = { [field]: !product[field] };
      const response = await axios.put(
        `/api/store/products/${id}`,
        updatedData
      );

      if (response.data.success) {
        setProducts(
          products.map((p) => (p._id === id ? response.data.product : p))
        );
      }
    } catch (error) {
      console.error("Error updating product status:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
        <button
          onClick={openAddModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <input
              type="text"
              placeholder="Search by heading or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <span className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-500 text-lg">
            No products found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src={product.imag1[0]}
                  alt={product.heading}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() =>
                      toggleProductStatus("bestSeller", product._id)
                    }
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      product.bestSeller
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    {product.bestSeller ? "Best Seller" : "Mark Best Seller"}
                  </button>
                  <button
                    onClick={() => toggleProductStatus("newItem", product._id)}
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      product.newItem
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    {product.newItem ? "New" : "Mark New"}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.heading}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      {product.category}
                    </span>
                  </div>
                  {product.colors.length > 0 && (
                    <div className="text-xs text-gray-500">
                      Colors: {product.colors.join(", ")}
                    </div>
                  )}
                  {product.sizes.length > 0 && (
                    <div className="text-xs text-gray-500">
                      Sizes: {product.sizes.join(", ")}
                    </div>
                  )}
                </div>
                <div className="flex justify-between space-x-2">
                  <button
                    onClick={() => openEditModal(product)}
                    className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 hover:text-indigo-700 text-sm font-medium py-2 px-3 rounded transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 text-sm font-medium py-2 px-3 rounded transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Images */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URLs *
                  </label>
                  {formData.imag1.map((url, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={url}
                        onChange={(e) =>
                          handleArrayInputChange("imag1", index, e.target.value)
                        }
                        className={`flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                          formErrors.imag1
                            ? "border-red-300"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter image URL"
                      />
                      {formData.imag1.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayField("imag1", index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField("imag1")}
                    className="mt-2 px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  >
                    Add Another Image
                  </button>
                  {formErrors.imag1 && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.imag1}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Heading *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.heading}
                    onChange={(e) =>
                      handleInputChange("heading", e.target.value)
                    }
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.heading ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter product heading"
                  />
                  {formErrors.heading && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.heading}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Affiliate Link *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.affiliateLink || ""}
                    onChange={(e) =>
                      handleInputChange("affiliateLink", e.target.value)
                    }
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.affiliateLink
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter product Affiliate Link"
                  />
                  {formErrors.affiliateLink && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.affiliateLink}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.description
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter product description"
                  />
                  {formErrors.description && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.description}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.price ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="0.00"
                  />
                  {formErrors.price && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.price}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    className={`mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      formErrors.category ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="e.g., Electronics"
                  />
                  {formErrors.category && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.category}
                    </p>
                  )}
                </div>

                {/* Colors */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Colors
                  </label>
                  {formData.colors.map((color, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={color}
                        onChange={(e) =>
                          handleArrayInputChange(
                            "colors",
                            index,
                            e.target.value
                          )
                        }
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter color"
                      />
                      {formData.colors.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayField("colors", index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField("colors")}
                    className="mt-2 px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  >
                    Add Color
                  </button>
                </div>

                {/* Sizes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sizes
                  </label>
                  {formData.sizes.map((size, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={size}
                        onChange={(e) =>
                          handleArrayInputChange("sizes", index, e.target.value)
                        }
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter size"
                      />
                      {formData.sizes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayField("sizes", index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField("sizes")}
                    className="mt-2 px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  >
                    Add Size
                  </button>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Material & Care
                  </label>
                  <textarea
                    rows={2}
                    value={formData.materialCare}
                    onChange={(e) =>
                      handleInputChange("materialCare", e.target.value)
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter material and care instructions"
                  />
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.bestSeller}
                      onChange={(e) =>
                        handleInputChange("bestSeller", e.target.checked)
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Best Seller
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.newItem}
                      onChange={(e) =>
                        handleInputChange("newItem", e.target.checked)
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">New Item</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Saving...
                    </span>
                  ) : editingProduct ? (
                    "Update Product"
                  ) : (
                    "Create Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
