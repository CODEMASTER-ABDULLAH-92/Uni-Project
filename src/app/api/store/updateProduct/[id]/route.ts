import dbConnect from "@/app/lib/db.connect";
import Product from "@/app/models/product.model";

import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  await dbConnect();

  const { id } = await context.params;

  try {
    // Parse request body as ProductRequestBody
    const body = await request.json();

    const {
      imag1,
      heading,
      price,
      category,
      colors,
      sizes,
      description,
      materialCare,
      bestSeller,
      newItem,
      affiliateLink,
    } = body;

    // Validate required fields
    if (!heading || !price || !category || !imag1?.length) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Create new product document
    const newProduct = await Product.findByIdAndUpdate(
      id,
      {
        imag1,
        heading,
        price,
        category,
        colors,
        sizes,
        description,
        materialCare,
        bestSeller,
        newItem,
        affiliateLink
      },
      { new: true }
    );

    // Return successful response
    return NextResponse.json(
      {
        success: true,
        message: "Product updated successfully!",
        product: newProduct,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Server error while creating product.",
      },
      { status: 500 }
    );
  }
}
