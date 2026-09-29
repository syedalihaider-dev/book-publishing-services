"use client"

import "@canvas-digital/blog-sdk/style.css";
import { BlogPlatform } from "@canvas-digital/blog-sdk";


const adminEmail = "admin@example.com";
const adminApiKey = "bp_sdk_wRrzldqLg";
const domain = "demo.example.com";


export default function App() {
    if (!adminApiKey) {
        return (
            <main className="page">
                <h1>Customer Admin</h1>
                <p>
                    Set <code>VITE_BLOG_API_URL</code> (platform API) and{" "}
                    <code>VITE_ADMIN_API_KEY</code> in <code>.env</code>. Optionally set{" "}
                    <code>VITE_ADMIN_EMAIL</code> and <code>VITE_CLIENT_DOMAIN</code>.
                </p>
            </main>
        );
    }


    return (
        <main className="app-full">
            <BlogPlatform
                mode="admin"
                domain={domain}
                email={adminEmail}
                apiKey={adminApiKey}
                branding={{
                    name: "Customer Articles",
                    primaryColor: "#0f766e",
                    secondaryColor: "#134e4a",
                }}
            />
        </main>
    );
}