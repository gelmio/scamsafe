"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
    Shield,
    Users,
    BookOpen,
    Award,
    ChevronDown,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const heroRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const testimonialsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this data to your backend
        toast({
            title: "Message sent!",
            description:
                "Thanks for reaching out. Joe will get back to you soon.",
        });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-emerald-500" />
                        <span className="text-xl font-bold">ScamShield</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8 py-2">
                        <button
                            onClick={() => scrollToSection(heroRef)}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection(aboutRef)}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection(servicesRef)}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection(testimonialsRef)}
                            className="text-sm font-medium hover:text-emerald-500 transition-colors"
                        >
                            Testimonials
                        </button>
                        <Button
                            onClick={() => scrollToSection(contactRef)}
                            variant="default"
                            className="bg-emerald-500 hover:bg-emerald-600"
                        >
                            Contact Me
                        </Button>
                    </nav>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <ChevronDown className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </header>

            <main className="flex-1">
                <section
                    ref={heroRef}
                    className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white"
                >
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Stay Safe Online with{" "}
                                    <span className="text-emerald-500">
                                        Joe Bloggs
                                    </span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Practical advice, lessons, and training to
                                    protect yourself from online scams. Learn
                                    how to identify threats and strengthen your
                                    digital security.
                                </p>
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
                            <div className="mx-auto lg:mx-0 relative">
                                <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
                                <img
                                    src="/placeholder.svg?height=550&width=550"
                                    alt="Digital security illustration"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full relative z-10"
                                    width={550}
                                    height={550}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    ref={aboutRef}
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Meet Joe Bloggs
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    With over 15 years of experience in
                                    cybersecurity, I'm passionate about helping
                                    people stay safe online.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="mx-auto lg:mx-0">
                                <img
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Joe Bloggs portrait"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">
                                        Why I Started ScamShield
                                    </h3>
                                    <p className="text-muted-foreground">
                                        After seeing too many friends and family
                                        members fall victim to online scams, I
                                        decided to use my expertise to help
                                        others. I believe everyone deserves to
                                        feel confident and secure in their
                                        digital lives.
                                    </p>
                                </div>
                                <ul className="grid gap-4">
                                    <li className="flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-emerald-500" />
                                        <span>
                                            Certified Cybersecurity Professional
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-emerald-500" />
                                        <span>
                                            Helped 500+ individuals stay safe
                                            online
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5 text-emerald-500" />
                                        <span>
                                            Regular speaker at community safety
                                            events
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    ref={servicesRef}
                    className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    How I Can Help You
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Practical, hands-on training to keep you and
                                    your loved ones safe from online threats.
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
                                        Personal Consultations
                                    </h3>
                                    <p className="text-muted-foreground">
                                        One-on-one sessions to assess your
                                        current security practices and create a
                                        personalized protection plan.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2 border-emerald-100">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-emerald-100">
                                        <Users className="h-8 w-8 text-emerald-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        Group Workshops
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Interactive sessions for families,
                                        community groups, or businesses to learn
                                        essential scam prevention skills.
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
                                        Regular check-ins and updates on the
                                        latest scam techniques to ensure your
                                        protection stays current.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section
                    ref={testimonialsRef}
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Success Stories
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hear from people who've strengthened their
                                    online security with my help.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: "Sarah Johnson",
                                    text: "Joe helped me identify and avoid a sophisticated phishing attempt that could have cost me thousands. His practical advice was easy to understand and implement.",
                                },
                                {
                                    name: "Michael Chen",
                                    text: "After attending Joe's workshop, our entire family feels more confident online. We've set up better passwords, enabled two-factor authentication, and know the warning signs of scams.",
                                },
                                {
                                    name: "Emily Rodriguez",
                                    text: "As a senior citizen, I was worried about being targeted by scammers. Joe's patient, clear explanations helped me feel empowered rather than fearful when using technology.",
                                },
                                {
                                    name: "David Thompson",
                                    text: "Joe's consultation was eye-opening. He identified several security vulnerabilities I wasn't aware of and provided simple solutions to address them.",
                                },
                                {
                                    name: "Lisa Williams",
                                    text: "Our community group learned so much from Joe's presentation. He made complex security concepts accessible and gave us practical tools to protect ourselves.",
                                },
                                {
                                    name: "Robert Kim",
                                    text: "After my neighbor fell victim to a scam, I reached out to Joe. His preventative approach has given me peace of mind that I won't make the same mistakes.",
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
                                        <p className="text-muted-foreground italic">
                                            "{testimonial.text}"
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    ref={contactRef}
                    className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
                >
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                        Get in Touch
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Ready to strengthen your online
                                        security? Reach out to schedule a
                                        consultation or learn more about my
                                        services.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-emerald-500" />
                                        <span>joe@scamshield-example.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-5 w-5 text-emerald-500" />
                                        <span>(555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-emerald-500" />
                                        <span>
                                            Available for in-person
                                            consultations in the Greater London
                                            area
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Card className="border-2 border-emerald-100">
                                <CardContent className="p-6">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                placeholder="Your email"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="message"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                value={message}
                                                onChange={(e) =>
                                                    setMessage(e.target.value)
                                                }
                                                placeholder="How can I help you?"
                                                className="min-h-[120px]"
                                                required
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-emerald-500 hover:bg-emerald-600"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full border-t py-6">
                <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-emerald-500" />
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} ScamShield by Joe
                            Bloggs. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-4">
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
                    </div>
                </div>
            </footer>
        </div>
    );
}
