"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { CallButton } from "@/components/ui";
import { ContactSection } from "@/components/home";
import {
  fetchBlogs,
  fetchCategories,
  formatBlogDate,
  resolveFeaturedImage,
} from "@/lib/blogApi";
import { BLOG_PAGE_SIZE } from "@/config/blog";

function BlogCard({ post }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    let active = true;
    resolveFeaturedImage(post.featured_image).then((url) => {
      if (active) setImageUrl(url);
    });
    return () => {
      active = false;
    };
  }, [post.featured_image]);

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <Link href={`/blog/${post.slug}`} className={styles.card}>
        <div className={styles.card_img}>
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt={post.title} />
          ) : (
            <Image
              src="/banner-book-01.png"
              alt={post.title}
              fill
              className={styles.placeholder_img}
            />
          )}
        </div>
        <div className={styles.card_body}>
          {post.category?.name ? (
            <span className={styles.category}>{post.category.name}</span>
          ) : null}
          <h3>{post.title}</h3>
          <p>{post.excerpt || "Read the full article."}</p>
          <div className={styles.meta}>
            <span>{formatBlogDate(post.published_at)}</span>
            {post.reading_minutes ? (
              <span>{post.reading_minutes} min read</span>
            ) : null}
          </div>
          <span className={styles.read_more}>Read More</span>
        </div>
      </Link>
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetchCategories()
      .then((data) => {
        if (active) setCategories(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (active) setCategories([]);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    fetchBlogs({
      page,
      pageSize: BLOG_PAGE_SIZE,
      categoryId: activeCategory,
    })
      .then((data) => {
        if (!active) return;
        setPosts(data.items || []);
        setTotal(data.total || 0);
      })
      .catch((err) => {
        if (!active) return;
        setPosts([]);
        setTotal(0);
        setError(err.message || "Failed to load blogs.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [page, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE));

  const handleCategory = (categoryId) => {
    setPage(1);
    setActiveCategory(categoryId);
  };

  return (
    <div className={styles.blogpage}>
      <section className={styles.banner}>
        <Image
          src="/contact/banner.png"
          alt="Blog Banner Background"
          fill
          style={{ objectFit: "cover" }}
          className={styles.bannerBg}
        />
        <div className="container">
          <div className="row align-items-end">
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_left}>
                <h1>
                  <span className="primarytxt">Our Blog</span>
                  <span className="break_line"></span>
                  Insights for Authors & Publishers
                </h1>
                <p>
                  Explore publishing tips, writing guides, and industry news from
                  Book Publishing Services.
                </p>
                <div className="combo_btn">
                  <CallButton />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={styles.sec_right}>
                <Image
                  src="/contact/banner-left.png"
                  alt="Blog Banner Image"
                  fill
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.blog_section} sec_padding`}>
        <div className="container">
          <div className={`${styles.sec_top} text-center`}>
            <h2>
              Latest
              <span className="break_line"></span>
              <span className="primarytxt">Articles & Guides</span>
            </h2>
            <p>
              Stay updated with helpful resources designed to support your
              publishing journey.
            </p>
          </div>

          <ul className={styles.tabs}>
            <li
              className={!activeCategory ? styles.activeTab : ""}
              onClick={() => handleCategory("")}
            >
              All
            </li>
            {categories.map((category) => (
              <li
                key={category.id}
                className={
                  activeCategory === category.id ? styles.activeTab : ""
                }
                onClick={() => handleCategory(category.id)}
              >
                {category.name}
              </li>
            ))}
          </ul>

          {loading ? (
            <div className={styles.loader_wrap}>
              <div className={styles.loader}></div>
              <p>Loading articles...</p>
            </div>
          ) : error ? (
            <div className={styles.empty_state}>
              <p>{error}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className={styles.empty_state}>
              <p>No articles found in this category.</p>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 ? (
                <div className={styles.pagination}>
                  <button
                    type="button"
                    className={styles.page_btn}
                    disabled={page <= 1}
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                  >
                    Previous
                  </button>
                  <span className={styles.page_info}>
                    Page {page} of {totalPages}
                  </span>
                  <button
                    type="button"
                    className={styles.page_btn}
                    disabled={page >= totalPages}
                    onClick={() =>
                      setPage((prev) => Math.min(totalPages, prev + 1))
                    }
                  >
                    Next
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
