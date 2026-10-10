<div align="center">

# 🛒 বাজার দর (BazarDor)

**বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম এক নজরে**

🌐 [Live Site](   https://bazar-dor-seven-rho.vercel.app) &nbsp;|&nbsp; 💻 [GitHub Repository](https://github.com/hridi61/bazar-dor)

</div>

---

## 📖 পরিচিতি

**বাজার দর** একটি ওয়েবসাইট, যেখানে চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার আজকের বাজারদর দেখা যায়। কোন পণ্যের দাম কতটা বাড়ল বা কমল, কোন বাজারে কত, সবকিছু এক জায়গায় পাওয়া যায়, তাই বাজারে যাওয়ার আগেই ক্রেতা দাম সম্পর্কে ধারণা পেয়ে যান।

## 🛠️ Technologies Used

| ক্ষেত্র | টুল |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS |
| Authentication | BetterAuth (Email, Google, GitHub) |
| Database | MongoDB Atlas |
| Notification | react-hot-toast |
| Deployment | Vercel |
| UI Component | DaisyUI |

## ✨ Key Features

1. **আজকের দাম ও দামের পরিবর্তন:** প্রতিটি পণ্যের আজকের দাম এবং আগের দিনের তুলনায় বাড়া-কমার হার (▲ / ▼ %) দেখা যায়।
2. **ক্যাটাগরি ফিল্টার ও দাম অনুযায়ী সাজানো:** আটটি ক্যাটাগরির আলাদা পেজ আছে, আর পণ্যগুলো কম থেকে বেশি বা বেশি থেকে কম দামে সাজানো যায়।
3. **পণ্যের বিস্তারিত পেজ:** সর্বনিম্ন, সর্বাধিক ও গড় দাম, কোন বাজারে সবচেয়ে কম বা বেশি, এবং বাজারভিত্তিক দামের তালিকা।
4. **নিরাপদ লগইন ও Protected route:** ইমেইল-পাসওয়ার্ড, Google ও GitHub দিয়ে সাইন ইন ও সাইন আপ করা যায়। লগইন ছাড়া বিস্তারিত পেজ ও প্রোফাইল দেখা যায় না।
5. **আমার প্রোফাইল:** নিজের নাম, ইমেইল ও ছবি দেখা এবং নাম আপডেট করা যায়। পুরো সাইট মোবাইল, ট্যাবলেট ও ডেস্কটপে ঠিকমতো দেখায়।

## 🚀 Run Locally

```bash
git clone https://github.com/hridi61/bazar-dor.git
cd bazar-dor
npm install
```

প্রজেক্টের root-এ `.env.example` দেখে `.env.local` ফাইল বানাও:

```env
BETTER_AUTH_SECRET=যেকোনো-৩২-বা-বেশি-অক্ষরের-র‍্যান্ডম-লেখা
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=তোমার-mongodb-connection-link
MONGODB_DB=bazardor
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

তারপর চালাও:

```bash
npm run dev
```

ব্রাউজারে http://localhost:3000 খোলো।

> ⚠️ `.env.local` ফাইল কখনো GitHub-এ push করবে না।