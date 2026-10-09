"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * On blog SDK routes the SDK owns history via pushState, which breaks Next.js
 * client transitions from the chrome. Use a real anchor there so the browser
 * does a full navigation and remounts the SDK cleanly.
 */
export default function SiteNavLink({ href, children, ...props }) {
  const pathname = usePathname();
  const hardNav = pathname?.startsWith("/blog");

  if (hardNav) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
