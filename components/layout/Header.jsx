"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ChatButton from "@/components/ui/ChatButton";
import styles from "./Header.module.css";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "@/config/config";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* === Top Header === */}
      <div className={styles.head_top}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className={styles.left}>
                <p>🌟 One-Stop All Book Solutions For Authors & Writers</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.right}>
                <ul>
                  <li>
                    <a href={`tel:${PHONE_NUMBER}`}>
                      <Image
                        src="/top-head-phone-icon.png"
                        width={24}
                        height={24}
                        alt="Phone Icon"
                        priority
                      />
                      {PHONE_NUMBER}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL_ADDRESS}`}>
                      <Image
                        src="/top-head-envelope-icon.png"
                        width={24}
                        height={24}
                        alt="Email Icon"
                        priority
                      />
                      {EMAIL_ADDRESS}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Main Header === */}
      <div className={styles.main_header}>
        <div className="container">
          <div className={styles.inner_wrapper}>
            {/* Logo */}
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo Image"
                  fill
                  priority
                  className={styles.img}
                />
              </Link>
            </div>

            {/* Desktop Navbar */}
            <nav className={`${styles.navbar} ${styles.desktop_menu}`}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#!">About Us</Link></li>
                <li><Link href="#!">Services</Link></li>
                <li><Link href="#!">Blog</Link></li>
                <li><Link href="#!">Contact Us</Link></li>
              </ul>
            </nav>

            {/* Chat Button */}
            <div className="combo_btn desktop_menu">
              <ChatButton />
            </div>

            {/* Mobile Toggle */}
            <button
              className={styles.mobile_toggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* === Mobile Menu === */}
      <div
        className={`${styles.mobile_menu} ${menuOpen ? styles.open : ""}`}
      >
        <ul>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="#!" onClick={() => setMenuOpen(false)}>About Us</Link></li>

          {/* Services Dropdown */}
          <li>
            <button
              className={styles.dropdown_toggle}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`${styles.chevron} ${
                  servicesOpen ? styles.rotate : ""
                }`}
              />
            </button>
            <ul
              className={`${styles.dropdown} ${
                servicesOpen ? styles.dropdownOpen : ""
              }`}
            >
              {Array.from({ length: 11 }, (_, i) => (
                <li key={i}>
                  <Link href="#!" onClick={() => setMenuOpen(false)}>
                    Service {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link href="#!" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link href="#!" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </header>
  );
}
