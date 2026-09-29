import {
  BLOG_API_BASE,
  BLOG_API_HEADERS,
  BLOG_MEDIA_BASE,
  BLOG_PAGE_SIZE,
} from "@/config/blog";

async function blogFetch(path, options = {}) {
  const res = await fetch(`${BLOG_API_BASE}${path}`, {
    ...options,
    headers: {
      ...BLOG_API_HEADERS,
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Blog API error (${res.status})`);
  }

  return res.json();
}

export async function fetchBlogs({
  page = 1,
  pageSize = BLOG_PAGE_SIZE,
  categoryId = "",
  sort = "published_at",
  order = "desc",
} = {}) {
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(pageSize),
    sort,
    order,
  });

  if (categoryId) params.set("category_id", categoryId);

  return blogFetch(`/blogs?${params.toString()}`);
}

export async function fetchBlogById(id) {
  return blogFetch(`/blogs/${id}`);
}

export async function fetchBlogBySlug(slug) {
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  if (uuidPattern.test(slug)) {
    return fetchBlogById(slug);
  }

  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const data = await fetchBlogs({ page, pageSize: 50 });
    const match = data.items?.find((item) => item.slug === slug);
    if (match) return fetchBlogById(match.id);

    totalPages = Math.max(1, Math.ceil((data.total || 0) / (data.page_size || 50)));
    page += 1;
  }

  return null;
}

export async function fetchCategories() {
  return blogFetch("/categories");
}

export async function recordBlogView(blogId) {
  try {
    await blogFetch("/analytics/views", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        blog_id: blogId,
        referrer: typeof window !== "undefined" ? window.location.href : "",
      }),
    });
  } catch (err) {
    console.error("Failed to record blog view:", err);
  }
}

export async function resolveFeaturedImage(featuredImage) {
  if (!featuredImage) return null;

  if (
    featuredImage.startsWith("http://") ||
    featuredImage.startsWith("https://") ||
    featuredImage.startsWith("/")
  ) {
    return featuredImage.startsWith("/")
      ? `${BLOG_MEDIA_BASE}${featuredImage}`
      : featuredImage;
  }

  try {
    const media = await blogFetch(`/media/${featuredImage}`);
    if (media?.url) {
      return media.url.startsWith("http")
        ? media.url
        : `${BLOG_MEDIA_BASE}${media.url}`;
    }
  } catch (err) {
    console.error("Failed to resolve media:", err);
  }

  return null;
}

export function formatBlogDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
