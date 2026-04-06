import Link from "next/link";
import { Shield } from "lucide-react";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <Shield className="h-6 w-6 text-emerald-500" />
                        <span className="text-xl font-bold">ScamSafe</span>
                    </Link>
                    <nav className="flex items-center gap-8 py-2">
                        <Link
                            href="/"
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/blog/"
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Blog
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="w-full border-t py-6">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-emerald-500" />
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} by Luke Gelmi. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
