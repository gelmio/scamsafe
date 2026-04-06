import { getAllPosts } from "@/lib/blog";
import HomeContent from "./home-content";

export default function Home() {
    const posts = getAllPosts().slice(0, 3);
    return <HomeContent posts={posts} />;
}
