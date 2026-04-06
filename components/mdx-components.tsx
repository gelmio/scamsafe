import type { MDXComponents } from "mdx/types";
import BrevoSubscribeForm from "@/app/breavo-subscribe-form";

export const mdxComponents: MDXComponents = {
    ContactForm: () => (
        <div className="my-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
            <BrevoSubscribeForm />
        </div>
    ),
    h1: (props) => (
        <h1
            className="text-3xl font-bold tracking-tighter mt-8 mb-4"
            {...props}
        />
    ),
    h2: (props) => (
        <h2
            className="text-2xl font-bold tracking-tight mt-8 mb-3"
            {...props}
        />
    ),
    h3: (props) => <h3 className="text-xl font-bold mt-6 mb-2" {...props} />,
    a: (props) => (
        <a
            className="text-emerald-600 underline underline-offset-4 hover:text-emerald-500 transition-colors"
            {...props}
        />
    ),
    blockquote: (props) => (
        <blockquote
            className="border-l-4 border-emerald-300 pl-4 italic text-muted-foreground my-4"
            {...props}
        />
    ),
    img: (props) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="rounded-xl my-6" alt={props.alt ?? ""} {...props} />
    ),
};
