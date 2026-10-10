const MESSAGES = {
  INVALID_EMAIL_OR_PASSWORD: "ইমেইল বা পাসওয়ার্ড সঠিক নয়",
  USER_ALREADY_EXISTS: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে",
  PASSWORD_TOO_SHORT: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে",
  INVALID_EMAIL: "ইমেইল ঠিকানাটি সঠিক নয়",
  PROVIDER_NOT_FOUND: "এই লগইন পদ্ধতি এখনো চালু করা হয়নি",
};

// Better Auth-এর error code থেকে বাংলা বার্তা বানায়
export function authErrorBn(error) {
  const code = String(error?.code ?? "");
  for (const [key, message] of Object.entries(MESSAGES)) {
    if (code.includes(key)) return message;
  }
  return error?.message || "কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন";
}
