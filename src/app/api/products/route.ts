import connectDB from '@/db/db';
import Product from '@/models/product';
import { NextRequest, NextResponse } from 'next/server';

connectDB();
export async function GET(request: NextRequest) {
  try {
    const products = await Product.find({});
    return NextResponse.json({ data: products });
  } catch (error) {
    return NextResponse.json({ message: 'error' });
  }
}
