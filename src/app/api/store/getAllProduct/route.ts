import dbConnect from "@/app/lib/db.connect";
import Product from "@/app/models/product.model";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  
  try {

    // Get all products
    const products = await Product.find({});

    // Success response
    return NextResponse.json({
      success: true,
      count: products.length,
      products: products
    });

  } catch (error) {
    console.error("Get products error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}