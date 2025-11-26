// import * as Sentry from "@sentry/nextjs";
import { type NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  // Sentry.logger.info("Proxy request", { requestUrl: request.url });
  console.log("Proxy request", { requestUrl: request.url });
  return NextResponse.next();
}
