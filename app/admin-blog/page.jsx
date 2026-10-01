"use client";

import "@canvas-digital/blog-sdk/style.css";
import { BlogPlatform } from "@canvas-digital/blog-sdk";

const apiUrl =
  process.env.NEXT_PUBLIC_BLOG_API_URL || process.env.BLOG_API_URL;
const domain = process.env.NEXT_PUBLIC_CLIENT_DOMAIN;
const initialEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "";

function onLoginSuccess({ email, apiKey }) {
  try {
    sessionStorage.setItem("blog_admin_email", email);
    sessionStorage.setItem("blog_admin_apiKey", apiKey);
  } catch {
    // storage unavailable
  }
}

export default function AdminBlogPage() {
  if (!apiUrl) {
    return (
      <main className="page">
        <h1>Customer Admin</h1>
        <p>
          Set <code>BLOG_API_URL</code> or <code>NEXT_PUBLIC_BLOG_API_URL</code>{" "}
          in <code>.env.local</code> (platform API base, e.g.{" "}
          <code>https://…/api/v1</code>). Optionally set{" "}
          <code>NEXT_PUBLIC_CLIENT_DOMAIN</code> and{" "}
          <code>NEXT_PUBLIC_ADMIN_EMAIL</code> to prefill login.
        </p>
      </main>
    );
  }

  return (
    <main className="app-full">
      <BlogPlatform
        mode="admin"
        apiUrl={apiUrl}
        domain={domain}
        {...(initialEmail ? { email: initialEmail } : {})}
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
