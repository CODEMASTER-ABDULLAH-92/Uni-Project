import mongoose, { Schema, Document } from "mongoose";

// Define an interface for TypeScript type checking
export interface IProduct extends Document {
  imag1: string[]; // image URLs or file paths
  heading: string;
  price: string;
  category: string;
  colors: string[];
  sizes: string[];
  description: string;
  materialCare: string;
  bestSeller: boolean;
  newItem: boolean;
  affiliateLink:string
}

// Define the schema
const productSchema = new Schema<IProduct>(
  {
    imag1: {
      type: [String],
      required: true,
    },
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    sizes: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    materialCare: {
      type: String,
      required: true,
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
    newItem: {
      type: Boolean,
      default: false,
    },
    affiliateLink:{
      type:String,
      required:true
    }
  },

  { timestamps: true }
);

// Prevent model overwrite in development
const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
