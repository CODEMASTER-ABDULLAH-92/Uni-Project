import dbConnect from "@/app/lib/db.connect";
import Product from "@/app/models/product.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await dbConnect();

  try {
    // Parse JSON body from request
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
    const newProduct = await Product.create({
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
    });

    // Return success response
    return NextResponse.json(
      { success: true, message: "Product created successfully!", product: newProduct },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { success: false, message: "Server error while creating product." },
      { status: 500 }
    );
  }
}
