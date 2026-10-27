import { useLanguage } from "@/i18n/useLanguage";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { type BlogPost } from "@/data/blogPosts";
import { localizedBlogs } from "@/data/localizedBlogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Tag,
  UserRound,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
const accentClasses = {
  blue: {
    text: "text-[#0071e3]",
    bg: "bg-[#e8f2ff]",
    border: "border-[#0071e3]/20",
  },
  green: {
    text: "text-[#188038]",
    bg: "bg-[#eaf7ef]",
    border: "border-[#34a853]/20",
  },
  purple: {
    text: "text-[#7b2ff7]",
    bg: "bg-[#f0e9ff]",
    border: "border-[#7b2ff7]/20",
  },
} satisfies Record<BlogPost["accent"], Record<string, string>>;
const BlogVisual = ({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-white ${featured ? "min-h-[380px]" : "h-60"}`}
    >
      <img
        src={post.coverImage}
        alt={post.coverAlt}
        className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
      />
    </div>
  );
};
const BlogCard = ({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) => {
  const { t } = useLanguage();
  const accent = accentClasses[post.accent];
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl ${featured ? "grid gap-0 lg:grid-cols-[1.05fr_0.95fr]" : "flex h-full min-h-[520px] flex-col"}`}
    >
      <BlogVisual post={post} featured={featured} />

      <div className="flex flex-col p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span
            className={`meta-pill ${accent.border} ${accent.bg} ${accent.text}`}
          >
            <Tag className="h-4 w-4" />
            {t(post.category)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <h2
          className={`${featured ? "text-3xl md:text-4xl" : "text-2xl"} font-bold tracking-tight text-foreground`}
        >
          {t(post.title)}
        </h2>
        <p className="mt-3 text-sm font-medium text-muted-foreground">
          {post.displayDate}
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          {t(post.excerpt)}
        </p>

        <div className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark">
          {t("Read article")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
};
const BlogIndex = () => {
  const { t, language } = useLanguage();
  const [featuredPost, ...otherPosts] = localizedBlogs(language).filter(
    (post) => !post.slug.startsWith("atlas-"),
  );
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex-1 w-full bg-[#f5f5f7] pt-28 pb-20"
    >
      <section className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="meta-pill mb-4 border-blue-100 bg-blue-50 text-primary-dark">
            {t("Writing")}
          </span>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {t("Field notes.")}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {t(
              "Experiments, equations, and what I learned from them.",
              "Experimentos, ecuaciones y lo que aprendí de ellos.",
            )}
          </p>
        </div>

        <BlogCard post={featuredPost} featured />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {otherPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
};
const BlogArticle = ({ post }: { post: BlogPost }) => {
  const { t } = useLanguage();
  const accent = accentClasses[post.accent];
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex-1 w-full bg-[#f5f5f7] pt-28 pb-20"
    >
      <article className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-primary-dark"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("Back to blog")}
        </Link>

        <header>
          <span
            className={`meta-pill ${accent.border} ${accent.bg} ${accent.text}`}
          >
            <Tag className="h-4 w-4" />
            {t(post.category)}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {t(post.title)}
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
            {t(post.subtitle)}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <UserRound className="h-4 w-4" />
              {t("Adam Maltoni")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.displayDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-sm">
            <BlogVisual post={post} featured />
          </div>
        </header>

        <div className="blog-prose mt-10">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node: _node, ...props }) => {
                void _node;
                return (
                  <a {...props} target="_blank" rel="noopener noreferrer" />
                );
              },
              img: ({ node: _node, ...props }) => {
                void _node;
                return (
                  <img
                    {...props}
                    loading="lazy"
                    decoding="async"
                    className="my-9 w-full rounded-xl border border-black/[0.08] bg-white p-2 shadow-lg shadow-black/[0.06]"
                  />
                );
              },
              table: ({ children }) => (
                <div
                  className="blog-table-scroll"
                  tabIndex={0}
                  role="region"
                  aria-label={t("Research results table")}
                >
                  <table>{children}</table>
                </div>
              ),
              code: ({ node: _node, className, children, ...props }) => {
                void _node;
                const inline = !className;
                return inline ? (
                  <code
                    {...props}
                    className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.9em] text-foreground"
                  >
                    {children}
                  </code>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
};
const Blog = () => {
  const { t, language } = useLanguage();
  const { slug } = useParams();
  const posts = useMemo(() => localizedBlogs(language), [language]);
  const post = slug ? posts.find((item) => item.slug === slug) : undefined;
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${post?.title ?? t(slug ? "Article not found" : "Writing")} | Adam Maltoni`;
    return () => {
      document.title = previousTitle;
    };
  }, [post, slug, t]);
  return (
    <div className="blog-page flex min-h-screen flex-col bg-background">
      <a className="skip-link" href="#main">
        {t("Skip to content")}
      </a>
      <Navigation />
      {slug ? (
        post ? (
          <BlogArticle post={post} />
        ) : (
          <main
            id="main"
            tabIndex={-1}
            className="flex flex-1 items-center justify-center px-4 pt-28 pb-20"
          >
            <div className="max-w-xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                {t("Article not found")}
              </h1>
              <p className="mt-4 text-muted-foreground">
                {t(
                  "The article you are looking for is not available in this portfolio.",
                )}
              </p>
              <Link
                to="/blog"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("Back to blog")}
              </Link>
            </div>
          </main>
        )
      ) : (
        <BlogIndex />
      )}
      <Footer />
    </div>
  );
};
export default Blog;
