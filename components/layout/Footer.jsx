"use client";

import Image from "next/image";
import SiteNavLink from "./SiteNavLink";
import styles from "./Footer.module.css";
import { PHONE_NUMBER, EMAIL_ADDRESS, LOCATION_ADDRESS } from "@/config/config";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-2">
            <h4>Quick links</h4>
            <ul className={styles.ft_link}>
              <li>
                <SiteNavLink href="/">Home</SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/about">About Us</SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/">Services</SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/blog">Blog</SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/contact">Contact</SiteNavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2">
            <h4>Services</h4>
            <ul className={styles.ft_link}>
              <li>
                <SiteNavLink href="/services/ebook-writing-services">Ebook Writing</SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/services/author-website-creation-services">
                  Author Website Creation
                </SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/services/book-proofreading-services">
                  Book Proofreading
                </SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/services/book-editing-services">Book Editing</SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/services/book-cover-design-services">
                  Book Cover Design
                </SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/services/book-trailer-services">Book Trailer</SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/services/book-audio-services">Book Audio</SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/services/audiobook-creation-services">
                  Audiobook Creation
                </SiteNavLink>
              </li>
              <li>
                <SiteNavLink href="/services/book-illustration-design-services">
                  Book Illustration Design
                </SiteNavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={styles.ft_logo}>
              <SiteNavLink href="/">
                <Image
                  src="/ft-logo.png"
                  fill
                  alt="Loading Footer Logo"
                  className="myImages"
                />
              </SiteNavLink>
            </div>
          </div>
          <div className="col-sm-12 col-md-2">
            <h4>Contact Us</h4>
            <ul className={styles.ft_info}>
              <li>
                <p>
                  <strong>Email Us:</strong>
                  <a href={`mailto:${EMAIL_ADDRESS}`}>Email Us Now</a>
                </p>
              </li>
              <li>
                <p>
                  <strong>Phone:</strong>
                  <a href={`tel:${PHONE_NUMBER}`}>Call Us Now</a>
                </p>
              </li>
            </ul>
            <h4 className={styles.follow_us}>Follow Us</h4>
            <ul className={styles.social_links}>
              <li>
                <a href="#!" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/facebook-icon.png"
                    fill
                    alt="Facebook Icon"
                    className="myIcon"
                  />
                </a>
              </li>
              <li>
                <a href="#!" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/instagram-icon.png"
                    fill
                    alt="Instagram Icon"
                    className="myIcon"
                  />
                </a>
              </li>
              <li>
                <a href="#!" target="_blank" rel="noopener noreferrer">
                  <Image src="/x-icon.png" fill alt="X Icon" className="myIcon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2">
            <h4>Locations</h4>
            <ul className={styles.ft_map}>
              <li>
                <Image
                  src="/location-icon-01.png"
                  width={43}
                  height={43}
                  alt="Location Icon"
                />
                <p>
                  <strong>Location:</strong>
                  <span>{LOCATION_ADDRESS}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.main_ft}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_left}>
                <p>
                  Copyright © 2025 <span>Book Publishing Services</span>.
                  <SiteNavLink href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                    Terms & Conditions
                  </SiteNavLink>
                  <SiteNavLink href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </SiteNavLink>
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_right}>
                <Image
                  src="/payment-method.png"
                  fill
                  alt="Payment Method"
                  className="myImages"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
