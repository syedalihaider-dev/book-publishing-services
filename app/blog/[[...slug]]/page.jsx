"use client";

import { usePathname } from "next/navigation";
import "@canvas-digital/blog-sdk/style.css";
import { BlogPlatform } from "@canvas-digital/blog-sdk";

const adminEmail = "admin@example.com";
const adminApiKey = "bp_sdk_wRrzldqLg";
const domain = "demo.example.com";

/**
 * Catch-all so the SDK can own list + detail URLs:
 *   /blog
 *   /blog/{slug}
 *   /blog/{slug}/{section}
 *   /blog/category/{categorySlug}
 */
export default function BlogCatchAllPage() {
  const pathname = usePathname() || "/blog";

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
        key={pathname}
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
