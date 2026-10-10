import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { db } from "./mongodb";

// Google/GitHub-এর key না থাকলেও সাইট চলবে; শুধু ওই বাটনে ক্লিক করলে error আসবে।
const socialProviders = {};
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  socialProviders.google = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  };
}
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  socialProviders.github = {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  };
}

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    // মনে রেখো: autoSignIn: false দিলে Better Auth ডুপ্লিকেট ইমেইলেও "সফল" সাড়া দেয়
    // (ইমেইল গণনা ঠেকাতে), তাই "ইমেইল আগেই আছে" error আর পাওয়া যায় না। ডিফল্ট রাখা হলো।
  },
  socialProviders,

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },
  plugins: [nextCookies()], // সবসময় সবার শেষে
});
