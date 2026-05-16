// BlogDetailPage.tsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { BASE_URL } from "../../../utils/baseUrl";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

interface RelatedBlog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<RelatedBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/blogs/${slug}`);
        
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        
        const data = await response.json();
        setBlog(data);
        
        // Update SEO meta tags
        if (data.seo?.title) {
          document.title = data.seo.title;
        } else if (data.title) {
          document.title = `${data.title} | Lone Star Academy`;
        }
        
        if (data.seo?.description) {
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute("content", data.seo.description);
          }
        }
        
        // Fetch related blogs
        if (data.category) {
          const relatedResponse = await fetch(`${BASE_URL}/api/blogs?category=${data.category}&limit=3`);
          const relatedData = await relatedResponse.json();
          const filtered = Array.isArray(relatedData) 
            ? relatedData.filter((b: RelatedBlog) => b._id !== data._id).slice(0, 3)
            : [];
          setRelatedBlogs(filtered);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  };
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog?.title || "")}`, "_blank");
  };
  
  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
  };
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navigation />
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-gray-300">404</h2>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">Blog not found</h2>
            <p className="mt-2 text-gray-600">The blog you're looking for doesn't exist or has been moved.</p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 text-white">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-200 backdrop-blur-sm">
              {blog.category}
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {blog.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>By {blog.author || "Lone Star Academy"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={blog.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"}
                alt={blog.title}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
              >
                <ArrowLeft size={18} />
                Back to Blog
              </Link>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Share:</span>
                <button
                  onClick={shareOnFacebook}
                  className="rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700 hover:scale-110"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={16} />
                </button>
                <button
                  onClick={shareOnTwitter}
                  className="rounded-full bg-black p-2 text-white transition hover:bg-gray-800 hover:scale-110"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={16} />
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="rounded-full bg-blue-700 p-2 text-white transition hover:bg-blue-800 hover:scale-110"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={16} />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="rounded-full bg-gray-600 p-2 text-white transition hover:bg-gray-700 hover:scale-110"
                  aria-label="Copy link"
                >
                  {copied ? <Check size={16} /> : <Link2 size={16} />}
                </button>
              </div>
            </div>

            {/* Blog Content */}
            <article className="prose prose-lg prose-blue max-w-none">
              {blog.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Back to Top Button */}
            <div className="mt-12 border-t border-gray-200 pt-8 text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                Back to Top
              </button>
            </div>
          </div>
        </section>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Related Blogs</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedBlogs.map((relatedBlog) => (
                  <div
                    key={relatedBlog._id}
                    className="group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition hover:shadow-xl"
                  >
                    <img
                      src={relatedBlog.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"}
                      alt={relatedBlog.title}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="p-6">
                      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                        {relatedBlog.category}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-gray-900 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedBlog.slug}`}
                        className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                      >
                        Read More
                        <ArrowLeft size={16} className="rotate-180" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </>
  );
}