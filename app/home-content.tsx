"use client";

import type React from "react";

import { useRef } from "react";
import Link from "next/link";
import {
    Shield,
    Users,
    BookOpen,
    Award,
    Mail,
    MapPin,
    Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogCard } from "@/components/blog-card";
import BrevoSubscribeForm from "./breavo-subscribe-form";
import type { BlogPostMeta } from "@/lib/blog";

export default function HomeContent({ posts }: { posts: BlogPostMeta[] }) {
    const heroRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const testimonialsRef = useRef<HTMLElement>(null);
    const blogRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const scrollToSection = (ref?: React.RefObject<HTMLElement | null>) => {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="grid min-h-screen">
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
                    <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-emerald-500" />
                        <span className="text-xl font-bold">ScamSafe</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8 py-2">
                        <a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); scrollToSection(heroRef); }}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#testimonials"
                            onClick={(e) => { e.preventDefault(); scrollToSection(testimonialsRef); }}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#blog"
                            onClick={(e) => { e.preventDefault(); scrollToSection(blogRef); }}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Blog
                        </a>
                        <Button
                            asChild
                            variant="default"
                            className="bg-emerald-500 hover:bg-emerald-600"
                        >
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}
                            >
                                Contact Me
                            </a>
                        </Button>
                    </nav>
                </div>
            </header>

            <main className="flex-1">
                <section
                    id="home"
                    ref={heroRef}
                    className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white"
                >
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Stay Safe Online with{" "}
                                    <span className="text-emerald-500 block">
                                        Luke Gelmi
                                    </span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Practical advice, lessons, and training to
                                    protect yourself from online scams. Learn
                                    how to identify threats and strengthen your
                                    digital security with my &quot;pay what you
                                    want&quot; groups sessions.
                                </p>
                                <div className="flex gap-2 text-muted-foreground">
                                    <MapPin />
                                    <p>Perth, WA</p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button
                                        onClick={() =>
                                            scrollToSection(servicesRef)
                                        }
                                        className="bg-emerald-500 hover:bg-emerald-600"
                                    >
                                        Explore Services
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            scrollToSection(contactRef)
                                        }
                                        variant="outline"
                                    >
                                        Get in Touch
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto lg:mx-0 relative grid justify-items-center gap-2">
                                <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
                                <img
                                    src="/class.png"
                                    alt="Digital security illustration"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full relative z-10"
                                    width={550}
                                    height={550}
                                />
                                <p className="text-sm text-muted-foreground">
                                    Sorry for the AI image, I&apos;ll take a
                                    real photo when I can!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="about"
                    ref={aboutRef}
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Meet Luke Gelmi
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    With over 8 years of experience in software
                                    engineering, I&apos;m passionate about
                                    helping people stay safe online.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="mx-auto lg:mx-0 grid gap-2 justify-items-center">
                                <img
                                    src="/me.png"
                                    alt="Luke Gelmi portrait"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                    width={400}
                                    height={400}
                                />
                                <p className="text-sm text-muted-foreground">
                                    This one is actually me!
                                </p>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">
                                        Why I Started ScamSafe
                                    </h3>
                                    <p className="text-muted-foreground">
                                        My parent&apos;s lack of scam savvy
                                        freaked me out. With a single session I
                                        helped build their defences. Doing the
                                        same for others is a very rewarding
                                        experience. If you&apos;ve got one
                                        password that you use for all your
                                        logins, then you&apos;re in the right
                                        place!
                                    </p>
                                </div>
                                <ul className="grid gap-4">
                                    <li className="flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-emerald-500" />
                                        <span>
                                            Software Engineering Professional
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-emerald-500" />
                                        <span>
                                            Helped 4+ individuals stay safe
                                            online (at least you know I&apos;m
                                            honest!)
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5 text-emerald-500" />
                                        <span>
                                            Friendly and approachable sessions
                                            for all levels
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="services"
                    ref={servicesRef}
                    className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
                >
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    How I Can Help You
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Practical, hands-on training and real action
                                    to make you safe from online threats.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                            <Card className="border-2 border-emerald-100">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-emerald-100">
                                        <Shield className="h-8 w-8 text-emerald-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        Up-to-date expertise
                                    </h3>
                                    <p className="text-muted-foreground">
                                        I keep track of the latest scams
                                        (they&apos;re getting so clever!) so
                                        that you don&apos;t have to.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2 border-emerald-100">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-emerald-100">
                                        <Users className="h-8 w-8 text-emerald-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        In-person group sessions
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Our sessions are all in person in small
                                        groups, so you can one on one support as
                                        we build up your scam defences.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2 border-emerald-100">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-emerald-100">
                                        <BookOpen className="h-8 w-8 text-emerald-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        Ongoing Support
                                    </h3>
                                    <p className="text-muted-foreground">
                                        I&apos;m here to help if ever
                                        you&apos;re in trouble or in doubt; the
                                        name of the game is to make sure you
                                        never make it into the newspapers as the
                                        latest scam victim!
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section
                    id="testimonials"
                    ref={testimonialsRef}
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px- mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Success Stories
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hear from people who&apos;ve strengthened
                                    their online security with my help.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: "Michelle, Woodvale",
                                    text: "I've always had great difficulty understanding computers and how they work. Luke explained everything clearly and patiently. He took the time to make sure we all understood, and did so in a way that was informative, supportive, and never overwhelming. Luke also helped us set up new passwords in a way that was easy to manage and remember. I would highly recommend him to anyone needing tech help. Thanks again, Luke!",
                                },
                                {
                                    name: "More to come!",
                                },
                            ].map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className="border-2 border-emerald-100"
                                >
                                    <CardContent className="p-6 flex flex-col space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Award className="h-5 w-5 text-emerald-500" />
                                            <span className="font-bold">
                                                {testimonial.name}
                                            </span>
                                        </div>
                                        {testimonial.text && (
                                            <p className="text-muted-foreground italic">
                                                &quot;{testimonial.text}&quot;
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="blog"
                    ref={blogRef}
                    className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
                >
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="p-3 rounded-full bg-emerald-100 inline-block mb-2">
                                    <Newspaper className="h-8 w-8 text-emerald-500" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Latest Articles
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Stay informed with practical tips to protect
                                    yourself online.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                variant="outline"
                                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                            >
                                <Link href="/blog/">View All Posts</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <section
                    id="contact"
                    ref={contactRef}
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                        Get in Touch
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Ready to strengthen your online
                                        security? Reach out to schedule a book a
                                        spot in a session or learn more about my
                                        services.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-emerald-500" />
                                        <a href="mailto:luke@scamsafe.me">luke@scamsafe.me</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-emerald-500" />
                                        <span>
                                            Available for in-person workshops in
                                            the Perth metro area
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Card className="border-2 border-emerald-100">
                                <CardContent>
                                    <BrevoSubscribeForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full border-t py-6">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-emerald-500" />
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} by Luke Gelmi. All
                            rights reserved.
                        </p>
                    </div>
                    {/* <div className="flex gap-4">
                        <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div> */}
                </div>
            </footer>
        </div>
    );
}
