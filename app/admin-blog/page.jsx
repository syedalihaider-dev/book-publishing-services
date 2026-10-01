"use client";

import { useEffect, useState } from "react";
import "@canvas-digital/blog-sdk/style.css";
import { BlogPlatform } from "@canvas-digital/blog-sdk";
import styles from "./page.module.css";

const apiUrl = "https://blog-platform-backend-omega.vercel.app/api/v1";
const domain = "demo.example.com";
const initialEmail = "admin@example.com";

export default function AdminBlogPage() {
  const [email, setEmail] = useState(initialEmail);
  const [apiKey, setApiKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      const storedEmail = sessionStorage.getItem("blog_admin_email");
      const storedKey = sessionStorage.getItem("blog_admin_apiKey");
      if (storedEmail && storedKey) {
        setEmail(storedEmail);
        setApiKey(storedKey);
        setIsAuthenticated(true);
      }
    } catch {
      // storage unavailable
    }
  }, []);

  function onLoginSuccess({ email: nextEmail, apiKey: nextApiKey }) {
    setEmail(nextEmail);
    setApiKey(nextApiKey);
    setIsAuthenticated(true);
    try {
      sessionStorage.setItem("blog_admin_email", nextEmail);
      sessionStorage.setItem("blog_admin_apiKey", nextApiKey);
    } catch {
      // storage unavailable
    }
  }

  function onLogout() {
    setApiKey("");
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem("blog_admin_email");
      sessionStorage.removeItem("blog_admin_apiKey");
    } catch {
      // storage unavailable
    }
  }

  return (
    <main className={styles.app_full}>
      <BlogPlatform
        mode="admin"
        apiUrl={apiUrl}
        domain={domain}
        email={email}
        apiKey={apiKey}
        isAuthenticated={isAuthenticated}
        onLoginSuccess={onLoginSuccess}
        onLogout={onLogout}
        branding={{
          name: "Book Publishing Services Blog",
          primaryColor: "#0b65db",
          secondaryColor: "#000000",
        }}
      />
    </main>
  );
}
