import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
    title: "Blog | ScamSafe by Luke Gelmi",
    description:
        "Practical tips and insights to help you stay safe from online scams. Read the latest from ScamSafe.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="container px-4 md:px-6 mx-auto py-12 md:py-24">
            <div className="space-y-2 text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    ScamSafe Blog
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                    Practical tips and real-world insights to help you stay safe
                    online.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}
