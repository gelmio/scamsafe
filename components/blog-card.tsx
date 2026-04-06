import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
    return (
        <Link href={`/blog/${post.slug}/`} className="group">
            <Card className="border-2 border-emerald-100 h-full transition-shadow group-hover:shadow-md">
                {post.coverImage && (
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-xl"
                    />
                )}
                <CardContent className="p-6 flex flex-col space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-emerald-500 transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString("en-AU", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime} min read
                        </span>
                    </div>
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs text-emerald-700"
                                >
                                    <Tag className="h-3 w-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </Link>
    );
}
