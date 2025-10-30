import { NextResponse } from "next/server";

export default function proxy() {
  console.log("Proxy request");
  return NextResponse.next();
}
