import { createAuthClient } from "better-auth/react";

// browser-এর জন্য: signIn, signUp, signOut, useSession, updateUser সব এখান থেকে
export const authClient = createAuthClient();
