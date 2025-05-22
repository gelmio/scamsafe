// components/BrevoSubscribeForm.tsx
import { useEffect } from "react";

export default function BrevoSubscribeForm() {
    useEffect(() => {
        const scriptMain = document.createElement("script");
        scriptMain.src = "https://sibforms.com/forms/end-form/build/main.js";
        scriptMain.defer = true;

        const scriptRecaptcha = document.createElement("script");
        scriptRecaptcha.src =
            "https://www.google.com/recaptcha/api.js?render=6Lc50D4rAAAAANfq20-dGhCSQN-ukUFJ6ZJT0PWl&hl=en";
        scriptRecaptcha.async = true;
        scriptRecaptcha.defer = true;

        document.body.appendChild(scriptMain);
        document.body.appendChild(scriptRecaptcha);

        return () => {
            document.body.removeChild(scriptMain);
            document.body.removeChild(scriptRecaptcha);
        };
    }, []);

    return (
        <>
            <link
                rel="stylesheet"
                href="https://sibforms.com/forms/end-form/build/sib-styles.css"
            />

            <div className="sib-form !bg-white text-center !p-0">
                <div
                    id="sib-form-container"
                    className="sib-form-container !p-0"
                >
                    <div
                        id="error-message"
                        className="sib-form-message-panel !text-base !text-left !font-sans !text-red-800 !bg-red-100 !rounded !border !border-red-500 max-w-[540px]"
                    >
                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center flex items-center gap-2">
                            <svg
                                viewBox="0 0 512 512"
                                className="sib-icon sib-notification__icon w-5 h-5"
                            >
                                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                            </svg>
                            <span className="sib-form-message-panel__inner-text">
                                Your message could not be sent. Please try
                                again, or try emailing me at{" "}
                                <a href="mailto:luke@scamsafe.me">
                                    luke@scamsafe.me
                                </a>
                                .
                            </span>
                        </div>
                    </div>

                    <div
                        id="success-message"
                        className="sib-form-message-panel !text-base !text-left !font-sans !text-green-800 !bg-green-100 !rounded !border !border-green-500 max-w-[540px]"
                    >
                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center flex items-center gap-2">
                            <svg
                                viewBox="0 0 512 512"
                                className="sib-icon sib-notification__icon w-5 h-5"
                            >
                                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                            </svg>
                            <span className="sib-form-message-panel__inner-text">
                                Your contact has been received. I&apos;ll be in
                                touch shortly.
                            </span>
                        </div>
                    </div>

                    <div
                        id="sib-container"
                        className="sib-container--large sib-container--vertical !bg-white !p-0 !text-center !border !border-white"
                    >
                        <form
                            id="sib-form"
                            method="POST"
                            action="https://sibforms.com/serve/MUIFAMvXwtaF5G_AyfEebB2HlVEpjeJhIpx9xDc6WHz35iQ1C4MWZSSeNLFHFxIZ387Yeqq8rWrz-vezyBUEas_6OmwyeQAFRpbbt9Qqp2Fr4ijccN1an2sxCyBEH8mXDKWTP9iPao7K7_qN9qCAXb7EenO8XAFu65P821ukrQ57LW6OpLEtQWsL43J4YcZ9YYStFU037Bz0A5P3"
                            data-type="subscription"
                            className="space-y-4"
                        >
                            <div className="sib-input sib-form-block">
                                <div className="form__entry entry_block">
                                    <div className="form__label-row flex flex-col gap-1">
                                        <label
                                            htmlFor="FIRSTNAME"
                                            className="entry__label !font-medium !text-sm !text-black font-sans !m-0"
                                        >
                                            Name
                                        </label>
                                        <div className="entry__field !border-0 !outline-0 !shadow-none">
                                            <input
                                                className="input !h-fit !w-full !p-2 ring-2 !border-0 !outline-0 !shadow-none ring-emerald-100 focus-visible:ring-emerald-500 !rounded-md"
                                                maxLength={200}
                                                type="text"
                                                id="FIRSTNAME"
                                                name="FIRSTNAME"
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <label className="entry__error entry__error--primary text-sm text-red-600"></label>
                                </div>
                            </div>

                            <div className="sib-input sib-form-block">
                                <div className="form__entry entry_block">
                                    <div className="form__label-row flex flex-col gap-1">
                                        <label
                                            htmlFor="EMAIL"
                                            className="entry__label !font-medium !text-sm !text-black font-sans !m-0"
                                        >
                                            Email
                                        </label>
                                        <div className="entry__field !border-0 !outline-0 !shadow-none">
                                            <input
                                                className="input !h-fit !w-full ring-2 !border-0 !outline-0 !shadow-none ring-emerald-100 focus-visible:ring-emerald-500 !p-2 !rounded-md"
                                                type="text"
                                                id="EMAIL"
                                                name="EMAIL"
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <label className="entry__error entry__error--primary text-sm text-red-600"></label>
                                </div>
                            </div>

                            <div
                                className="g-recaptcha-v3"
                                data-sitekey="6Lc50D4rAAAAANfq20-dGhCSQN-ukUFJ6ZJT0PWl"
                                style={{ display: "none" }}
                            ></div>

                            <div className="sib-form-block text-center m-0 !flex !justify-center">
                                <button
                                    type="submit"
                                    form="sib-form"
                                    className="sib-form-block__button sib-form-block__button-with-loader !bg-emerald-500 !text-white !text-sm !px-6 !py-2 !rounded-lg hover:bg-emerald-600 transition !flex !flex-row"
                                >
                                    <svg
                                        className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                                    </svg>
                                    <span>Get in touch</span>
                                </button>
                            </div>

                            <input
                                type="text"
                                name="email_address_check"
                                value=""
                                className="input--hidden"
                                readOnly
                            />
                            <input type="hidden" name="locale" value="en" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
