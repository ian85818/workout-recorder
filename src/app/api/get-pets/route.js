import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    const pets = await sql`SELECT * FROM Pets;`;
    return NextResponse.json({ pets }, { status: 200 })
}