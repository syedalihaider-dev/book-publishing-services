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

  const services = [
    { name: "Ebook Writing", link: "/services/ebook-writing-services" },
    { name: "Author Website Creation", link: "/services/author-website-creation-services" },
    { name: "Book Proofreading", link: "/services/book-proofreading-services" },
    { name: "Book Editing", link: "/services/book-editing-services" },
    { name: "Book Cover Design", link: "/services/book-cover-design-services" },
    { name: "Book Trailer", link: "/services/book-trailer-services" },
    { name: "Book Audio", link: "/services/book-audio-services" },
    { name: "Book Marketing", link: "/services/book-marketing-services" },
    { name: "Audiobook Creation", link: "/services/audiobook-creation-services" },
    { name: "Book Illustration Design", link: "/services/book-illustration-design-services" },
  ];

  return (
    <header className={styles.header}>
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
                      fetchPriority="high" 
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
                      fetchPriority="high" 
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
      <div className={styles.main_header}>
        <div className="container">
          <div className={styles.inner_wrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <Image 
                src="/logo.png" 
                alt="Logo Image" 
                fill 
                priority 
                fetchPriority="high" 
                className={styles.img} 
                />
              </Link>
            </div>
            <nav className={`${styles.navbar} ${styles.desktop_menu}`}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li>
                  <button
                    className={styles.dropdown_toggle}
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={16}
                      className={`${styles.chevron} ${servicesOpen ? styles.rotate : ""}`}
                    />
                  </button>
                  <ul
                    className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ""}`}
                  >
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link href={service.link}>{service.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </nav>
            <div className="combo_btn desktop_menu">
              <ChatButton />
            </div>
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
      <div className={`${styles.mobile_menu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li>
            <button
              className={styles.dropdown_toggle}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`${styles.chevron} ${servicesOpen ? styles.rotate : ""}`}
              />
            </button>
            <ul className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ""}`}>
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.link} onClick={() => setMenuOpen(false)}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </header>
  );
}
