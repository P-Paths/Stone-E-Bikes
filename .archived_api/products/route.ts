import { NextResponse } from 'next/server';
import { MockStorage } from '../../../server/mock-storage';

const storage = new MockStorage();

export async function GET() {
  const products = await storage.getProducts();
  return NextResponse.json(products);
}


