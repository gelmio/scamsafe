import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ScamSafe by Luke Gelmi | Online Scam Protection & Training",
    description:
        "Learn how to spot scams and protect your digital life. ScamSafe offers expert advice, personal consultations, and training led by Luke Gelmi.",
    keywords: [
        "online scam protection",
        "cybersecurity training",
        "phishing prevention",
        "digital security",
        "scam prevention",
        "Luke Gelmi",
        "internet safety",
        "online security courses",
        "anti-fraud training",
    ],
    authors: [{ name: "Luke Gelmi", url: "https://scamsafe.me" }],
    creator: "Luke Gelmi",
    publisher: "ScamSafe",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://scamsafe.me"),
    alternates: {
        canonical: "https://scamsafe.me/",
    },
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://scamsafe.me",
        title: "ScamSafe by Luke Gelmi | Stay Safe Online",
        description:
            "Protect yourself from scams with ScamSafe. Expert advice, private training, and group workshops designed for online safety.",
        siteName: "ScamSafe",
        images: [
            {
                url: "https://scamsafe.me/class-rectangle.png",
                width: 1200,
                height: 630,
                alt: "ScamSafe training session with Luke Gelmi and clients",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ScamSafe by Luke Gelmi | Online Scam Protection & Training",
        description:
            "Get expert training from Luke Gelmi to protect yourself from phishing, fraud, and online threats.",
        images: ["https://scamsafe.me/class-rectangle.png"],
        creator: "@scamsafeme", // optional: use your actual Twitter handle if available
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/icon.svg" },
            { url: "/icon.svg", type: "image/svg+xml" },
        ],
        apple: [{ url: "/icon.svg", sizes: "180x180", type: "image/svg" }],
        other: [
            {
                rel: "mask-icon",
                url: "/icon.svg",
            },
        ],
    },
    manifest: "https://scamsafe.me/site.webmanifest",
    verification: {
        google: "google-site-verification-code",
    },
    category: "security",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <script
                    src="https://www.google.com/recaptcha/api.js?render=6Lc50D4rAAAAANfq20-dGhCSQN-ukUFJ6ZJT0PWl&hl=en"
                    async
                    defer
                />
                <script
                    defer
                    src="https://sibforms.com/forms/end-form/build/main.js"
                ></script>
            </body>
        </html>
    );
}
