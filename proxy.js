import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Next.js 16-এ middleware-এর নাম proxy। এটা শুধু দ্রুত cookie দেখে;
// আসল যাচাই হয় প্রতিটি পেজের ভেতরে (lib/session.js)।
export function proxy(request) {
  if (getSessionCookie(request)) return NextResponse.next();

  const url = new URL("/signin", request.url);
  url.searchParams.set("reason", "login-required");
  url.searchParams.set("redirect", request.nextUrl.pathname + request.nextUrl.search);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/product/:path*", "/profile/:path*"],
};
