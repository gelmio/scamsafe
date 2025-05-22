"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormData = {
    FIRSTNAME: string;
    EMAIL: string;
    email_address_check?: string;
    locale: string;
};

export function BrevoSubscribeForm() {
    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");
    const [message, setMessage] = useState("");

    const { register, handleSubmit, reset, getValues } = useForm<FormData>({
        defaultValues: {
            locale: "en",
            email_address_check: "",
        },
    });

    const onSubmit = async () => {
        setStatus("submitting");

        try {
            // reCAPTCHA
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const token = await (window as any).grecaptcha.execute(
                "6Lc50D4rAAAAANfq20-dGhCSQN-ukUFJ6ZJT0PWl",
                { action: "submit" },
            );

            const values = getValues();
            const formData = new FormData();

            for (const key in values) {
                formData.append(key, values[key as keyof FormData] ?? "");
            }

            formData.append("g-recaptcha-response", token);

            const res = await fetch(
                "https://sibforms.com/serve/MUIFAD-hlCX8UsmjWtdIuO0ASTEBFD4MisUG6jCTRCPkF_jhRxxnNLHKe60NHQaerS69EjVYtoxN3be71qBQBKkAvjE-P372T7zGNCYLPJRpU-Lzb5UVxrkKQi1Wyqz65i-jY3QkRN8ROSfZM2aa29DtaEXLoeCpSE7cwwOnYdSN4jXP_z5AhGSGt0kGhalh6LR7lGJPVuLY9Xqj",
                { method: "POST", body: formData },
            );

            if (res.ok) {
                setStatus("success");
                setMessage(
                    "Your contact has been received. I'll be in touch shortly. Cheers, Luke",
                );
                reset();
            } else {
                setStatus("error");
                setMessage(
                    "Your subscription could not be saved. Please try again or send me an email at luke@scamsafe.me",
                );
            }
        } catch (error) {
            console.error(error);

            setStatus("error");
            setMessage(
                "Your subscription could not be saved. Please try again.",
            );
        }
    };

    return (
        <div>
            {status === "error" && (
                <div className="mb-4 text-red-700 bg-red-100 p-3 rounded">
                    {message}
                </div>
            )}
            {status === "success" && (
                <div className="mb-4 text-green-700 bg-green-100 p-3 rounded">
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label
                        htmlFor="FIRSTNAME"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <Input
                        id="FIRSTNAME"
                        {...register("FIRSTNAME", { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="EMAIL"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <Input
                        id="EMAIL"
                        type="email"
                        {...register("EMAIL", { required: true })}
                    />
                </div>

                {/* honeypot */}
                <input
                    type="text"
                    {...register("email_address_check")}
                    className="hidden"
                />

                {/* locale */}
                <input type="hidden" {...register("locale")} value="en" />

                <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-emerald-500 hover:bg-emerald-600"
                >
                    {status === "submitting" ? "Submitting…" : "Get in touch"}
                </Button>
            </form>
        </div>
    );
}
