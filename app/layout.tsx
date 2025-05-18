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
    title: "ScamSafe by Luke Gelmi | Scam Protection & Training",
    description:
        "Expert advice, lessons, and training to protect yourself from online scams. Learn how to identify threats and strengthen your digital security with Luke Gelmi.",
    keywords: [
        "online scam protection",
        "cybersecurity training",
        "phishing prevention",
        "digital security",
        "online safety",
        "scam awareness",
        "Luke Gelmi security",
        "internet safety lessons",
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
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://scamsafe.me",
        title: "ScamSafe by Luke Gelmi | Stay Safe Online",
        description:
            "Expert training and advice to protect yourself from online scams and threats. Personal consultations, group workshops, and ongoing support.",
        siteName: "ScamSafe",
        images: [
            {
                url: "https://scamsafe.me/class.png",
                width: 1200,
                height: 630,
                alt: "ScamSafe by Luke Gelmi - Online Scam Protection",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ScamSafe by Luke Gelmi | Online Scam Protection",
        description:
            "Expert training and advice to protect yourself from online scams and threats.",
        images: ["https://scamsafe.me/class.png"],
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
            </body>
        </html>
    );
}
