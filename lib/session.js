import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export async function getSession() {
  return auth.api.getSession({ headers: await headers() });
}

// Protected page-এর ভেতরে ডাকো। লগইন না থাকলে /signin-এ পাঠায়, আর সাইন ইনের পর ফিরে আসার পথ মনে রাখে।
export async function requireSession(returnTo) {
  const session = await getSession();
  if (!session) {
    redirect(
      `/signin?reason=login-required&redirect=${encodeURIComponent(returnTo)}`
    );
  }
  return session;
}
