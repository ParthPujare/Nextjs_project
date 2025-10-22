import { PrismaClient } from "../../../lib/prisma"; 
const prisma  = new PrismaClient()

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true, contact });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to save contact." }, { status: 500 });
  }
}
