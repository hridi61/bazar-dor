// ?redirect=... থেকে আসা পথ শুধু নিজের সাইটের ভেতরের হলেই মানা হয় (open redirect ঠেকাতে)
export function safeRedirect(value) {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//")
    ? value
    : "/";
}

export function withRedirect(path, redirectTo) {
  return redirectTo && redirectTo !== "/"
    ? `${path}?redirect=${encodeURIComponent(redirectTo)}`
    : path;
}
