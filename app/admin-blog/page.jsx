"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import "@canvas-digital/blog-sdk/style.css";
import { BlogPlatform } from "@canvas-digital/blog-sdk";
import styles from "./page.module.css";

/** Same key the SDK writes on login — shared across tabs via localStorage */
const SDK_SESSION_KEY = "bp_admin_session_v1";

const apiUrl = "https://app.yourwebsitemockup.net:8000/api/v1";
const domain = "demo.example.com";
const initialEmail = "admin@example.com";

function readStoredCreds() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SDK_SESSION_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.email?.trim() && parsed?.apiKey?.trim()) {
        return { email: parsed.email.trim(), apiKey: parsed.apiKey.trim() };
      }
    }
    // Legacy sessionStorage keys from older builds
    const email = sessionStorage.getItem("blog_admin_email")?.trim();
    const apiKey = sessionStorage.getItem("blog_admin_apiKey")?.trim();
    if (email && apiKey) {
      const creds = { email, apiKey };
      localStorage.setItem(SDK_SESSION_KEY, JSON.stringify(creds));
      return creds;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function writeStoredCreds(creds) {
  try {
    if (!creds) {
      localStorage.removeItem(SDK_SESSION_KEY);
      sessionStorage.removeItem("blog_admin_email");
      sessionStorage.removeItem("blog_admin_apiKey");
      return;
    }
    localStorage.setItem(SDK_SESSION_KEY, JSON.stringify(creds));
    sessionStorage.setItem("blog_admin_email", creds.email);
    sessionStorage.setItem("blog_admin_apiKey", creds.apiKey);
  } catch {
    /* storage unavailable */
  }
}

export default function AdminBlogPage() {
  // Do not read localStorage in useState — Next SSR hydrates with null and
  // never re-runs the initializer, which stuck Preview tabs on the login form.
  const [creds, setCreds] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCreds(readStoredCreds());
    setReady(true);
  }, []);

  const onLoginSuccess = useCallback((next) => {
    const cleaned = {
      email: next.email.trim(),
      apiKey: next.apiKey.trim(),
    };
    writeStoredCreds(cleaned);
    setCreds(cleaned);
  }, []);

  const onLogout = useCallback(() => {
    writeStoredCreds(null);
    setCreds(null);
  }, []);

  const platformProps = useMemo(() => {
    const email = creds?.email || initialEmail || undefined;
    const apiKey = creds?.apiKey || undefined;
    return { email, apiKey };
  }, [creds]);

  if (!ready) {
    return (
      <main className={styles.app_full} style={{ display: "grid", placeItems: "center" }}>
        <p style={{ color: "#64748b", fontSize: 14 }}>Restoring session…</p>
      </main>
    );
  }

  return (
    <main className={styles.app_full}>
      <BlogPlatform
        mode="admin"
        apiUrl={apiUrl}
        domain={domain}
        email={platformProps.email}
        apiKey={platformProps.apiKey}
        isAuthenticated={false}
        onLoginSuccess={onLoginSuccess}
        onLogout={onLogout}
        /* View / Preview → public user BlogDetail at /blog/{slug} (no admin UI) */
        basePath="/blog"
        publicOrigin={typeof window !== "undefined" ? window.location.origin : undefined}
        branding={{
          name: "Book Publishing Services Blog",
          primaryColor: "#0b65db",
          secondaryColor: "#000000",
        }}
      />
    </main>
  );
}
