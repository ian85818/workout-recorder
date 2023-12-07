import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';

export async function GET() {
    const pets = await prisma.pets.findMany();
    return NextResponse.json({ pets }, { status: 200 })
}