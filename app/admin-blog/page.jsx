"use client";

import "@canvas-digital/blog-sdk/style.css";
import { BlogPlatform } from "@canvas-digital/blog-sdk";

const apiUrl = "https://blog-platform-backend-omega.vercel.app/api/v1";
const domain = "demo.example.com";
const initialEmail = "admin@example.com";

function onLoginSuccess({ email, apiKey }) {
  try {
    sessionStorage.setItem("blog_admin_email", email);
    sessionStorage.setItem("blog_admin_apiKey", apiKey);
  } catch {
    // storage unavailable
  }
}

export default function AdminBlogPage() {
  return (
    <main className="app-full">
      <BlogPlatform
        mode="admin"
        apiUrl={apiUrl}
        domain={domain}
        email={initialEmail}
        isAuthenticated={false}
        onLoginSuccess={onLoginSuccess}
        branding={{
          name: "Book Publishing Services Blog",
          primaryColor: "#0b65db",
          secondaryColor: "#000000",
        }}
      />
    </main>
  );
}
