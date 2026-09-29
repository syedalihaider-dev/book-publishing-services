"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { CallButton } from "@/components/ui";
import { ContactSection } from "@/components/home";
import {
  fetchBlogBySlug,
  fetchBlogs,
  formatBlogDate,
  recordBlogView,
  resolveFeaturedImage,
} from "@/lib/blogApi";

export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params?.slug;

  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    let active = true;
    setLoading(true);
    setError("");
    setPost(null);
    setRelated([]);
    setImageUrl(null);

    fetchBlogBySlug(slug)
      .then(async (data) => {
        if (!active) return;
        if (!data) {
          setError("Article not found.");
          return;
        }

        setPost(data);
        recordBlogView(data.id);

        const resolved = await resolveFeaturedImage(data.featured_image);
        if (active) setImageUrl(resolved);

        if (data.category_id) {
          const relatedData = await fetchBlogs({
            page: 1,
            pageSize: 6,
            categoryId: data.category_id,
          });
          if (!active) return;
          setRelated(
            (relatedData.items || []).filter((item) => item.id !== data.id).slice(0, 3)
          );
        }
      })
      .catch((err) => {
        if (!active) return;
        setError(err.message || "Failed to load article.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  const isHtmlContent =
    typeof post?.content === "string" && /<\/?[a-z][\s\S]*>/i.test(post.content);

  return (
    <div className={styles.blog_details}>
      <section className={styles.banner}>
        <Image
          src="/contact/banner.png"
          alt="Blog Details Banner"
          fill
          style={{ objectFit: "cover" }}
          className={styles.bannerBg}
        />
        <div className="container">
          <div className="row align-items-end">
            <div className="col-sm-12 col-md-8">
              <div className={styles.sec_left}>
                <Link href="/blog" className={styles.back_link}>
                  ← Back to Blog
                </Link>
                {loading ? (
                  <>
                    <h1>
                      <span className="primarytxt">Loading Article</span>
                    </h1>
                    <p>Please wait while we fetch this post.</p>
                  </>
                ) : error || !post ? (
                  <>
                    <h1>
                      <span className="primarytxt">Article Not Found</span>
                    </h1>
                    <p>{error || "The article you are looking for does not exist."}</p>
                    <div className="combo_btn">
                      <CallButton />
                    </div>
                  </>
                ) : (
                  <>
                    {post.category?.name ? (
                      <span className={styles.badge}>{post.category.name}</span>
                    ) : null}
                    <h1>
                      <span className="primarytxt">{post.title}</span>
                    </h1>
                    <p>{post.excerpt}</p>
                    <div className={styles.meta}>
                      <span>{formatBlogDate(post.published_at)}</span>
                      {post.reading_minutes ? (
                        <span>{post.reading_minutes} min read</span>
                      ) : null}
                    </div>
                    <div className="combo_btn">
                      <CallButton />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className={styles.sec_right}>
                <Image
                  src="/contact/banner-left.png"
                  alt="Blog Details Image"
                  fill
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.content_section}>
        <div className="container">
          {loading ? (
            <div className={styles.loader_wrap}>
              <div className={styles.loader}></div>
              <p>Loading article...</p>
            </div>
          ) : error || !post ? (
            <div className={styles.empty_state}>
              <p>{error || "Article not found."}</p>
              <Link href="/blog" className={styles.back_link}>
                Return to Blog
              </Link>
            </div>
          ) : (
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-10 mx-auto">
                <div className={styles.article}>
                  {imageUrl ? (
                    <div className={styles.featured}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={imageUrl} alt={post.title} />
                    </div>
                  ) : null}

                  {post.post_format === "quote" && post.format_meta?.quoteText ? (
                    <blockquote className={styles.quote}>
                      <p>{post.format_meta.quoteText}</p>
                      {post.format_meta.quoteSource ? (
                        <cite>{post.format_meta.quoteSource}</cite>
                      ) : null}
                    </blockquote>
                  ) : null}

                  {post.post_format === "video" && post.format_meta?.videoUrl ? (
                    <div className={styles.video_wrap}>
                      <a
                        href={post.format_meta.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.video_link}
                      >
                        {post.format_meta.linkTitle || "Watch Video"}
                      </a>
                    </div>
                  ) : null}

                  {isHtmlContent ? (
                    <div
                      className={styles.article_body}
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  ) : (
                    <div className={styles.article_body}>
                      <p>{post.content}</p>
                    </div>
                  )}

                  {post.tags?.length ? (
                    <div className={styles.tags}>
                      {post.tags.map((tag) => (
                        <span key={tag.id}>{tag.name}</span>
                      ))}
                    </div>
                  ) : null}
                </div>

                {related.length > 0 ? (
                  <div className={styles.related}>
                    <h2>
                      <span className="primarytxt">Related</span> Articles
                    </h2>
                    <div className="row g-4">
                      {related.map((item) => (
                        <div key={item.id} className="col-sm-12 col-md-4">
                          <Link
                            href={`/blog/${item.slug}`}
                            className={styles.related_card}
                          >
                            <h3>{item.title}</h3>
                            <p>{item.excerpt}</p>
                            <span className={styles.read_more}>Read More</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
