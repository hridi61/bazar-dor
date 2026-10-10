import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI পাওয়া যায়নি। .env.local ফাইলে এটি বসাও।");
}

// dev-এ hot reload হলে যেন বারবার নতুন connection না খোলে, তাই globalThis-এ রাখা হয়
const client = (globalThis._mongoClient ??= new MongoClient(uri));

export const db = client.db(process.env.MONGODB_DB || "bazardor");
