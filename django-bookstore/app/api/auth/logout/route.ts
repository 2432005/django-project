import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST() {
  cookies().delete("session")
  return NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"))
}
