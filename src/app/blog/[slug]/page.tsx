import React from "react";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostClient from "@/components/BlogPostClient";

export async function generateStaticParams() {
  return PORTFOLIO_DATA.blogs.map((b) => ({
    slug: b.slug
  }));
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = PORTFOLIO_DATA.blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const otherBlogs = PORTFOLIO_DATA.blogs.filter((b) => b.slug !== slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />
      <main className="flex-1">
        <BlogPostClient blog={blog} otherBlogs={otherBlogs} />
      </main>
      <Footer />
    </div>
  );
}
