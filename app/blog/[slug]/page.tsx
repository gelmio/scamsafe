import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx-components";

export function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    return params.then(({ slug }) => {
        const post = getPostBySlug(slug);
        return {
            title: `${post.title} | ScamSafe Blog`,
            description: post.description,
        };
    });
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    return (
        <article className="container px-4 md:px-6 mx-auto py-12 md:py-24 max-w-3xl">
            <Link
                href="/blog/"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-emerald-500 transition-colors mb-8"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to blog
            </Link>

            {post.coverImage && (
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
                />
            )}

            <header className="mb-8 space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-AU", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime} min read
                    </span>
                </div>
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700"
                            >
                                <Tag className="h-3 w-3" />
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            <div className="prose prose-neutral max-w-none prose-a:text-emerald-600 prose-a:underline-offset-4 hover:prose-a:text-emerald-500 prose-blockquote:border-emerald-300">
                <MDXRemote
                    source={post.source}
                    components={mdxComponents}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                        },
                    }}
                />
            </div>
        </article>
    );
}
