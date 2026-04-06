import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const WORDS_PER_MINUTE = 200;

export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags?: string[];
    coverImage?: string;
    readingTime: number;
}

export interface BlogPost extends BlogPostMeta {
    source: string;
}

function calculateReadingTime(content: string): number {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function getAllPosts(): BlogPostMeta[] {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const filePath = path.join(BLOG_DIR, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            tags: data.tags,
            coverImage: data.coverImage,
            readingTime: calculateReadingTime(content),
        } satisfies BlogPostMeta;
    });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getPostBySlug(slug: string): BlogPost {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags,
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(content),
        source: content,
    };
}
