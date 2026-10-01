"use client";

import "@canvas-digital/blog-sdk/style.css";
import { BlogPlatform } from "@canvas-digital/blog-sdk";

const adminEmail = "admin@example.com";
const adminApiKey = "bp_sdk_wRrzldqLg";
const domain = "demo.example.com";

export default function BlogPage() {
  if (!adminApiKey) {
    return (
      <main className="page">
        <h1>Blog</h1>
        <p>
          Provide <code>email</code> and <code>apiKey</code> for the Blog SDK.
        </p>
      </main>
    );
  }

  return (
    <main className="app-full">
      <BlogPlatform
        mode="user"
        basePath="/blog" 
        domain={domain}
        email={adminEmail}
        apiKey={adminApiKey}
        branding={{
          name: "Book Publishing Services Blog",
          primaryColor: "#0b65db",
          secondaryColor: "#000000",
        }}
      />
    </main>
  );
}
