import * as Sentry from "@sentry/nextjs";
import { type NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  Sentry.logger.info("Proxy request", { requestUrl: request.url });
  return NextResponse.next();
}
