"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** There is no newsletter backend in this project, so submission is simulated. */
const fakeSubscribe = () => new Promise((resolve) => setTimeout(resolve, 900));

function MailIcon() {
  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" aria-hidden className="shrink-0 text-gunmetal">
      <rect x="0.5" y="0.5" width="20" height="17" rx="5" stroke="currentColor" />
      <path d="M4.5 6.5l6 4 6-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type SubscribeFormProps = {
  onSuccess?: () => void;
};

export function SubscribeForm({ onSuccess }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const inputId = useId();
  const messageId = useId();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await fakeSubscribe();
    setStatus("success");
    setEmail("");
    onSuccess?.();
  };

  const isError = status === "error";

  return (
    <form noValidate onSubmit={handleSubmit} className="mx-auto mt-10 w-full max-w-156.5 sm:mt-18">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div
          className={`flex h-14 items-center gap-3.5 sm:flex-1 rounded-[10px] bg-white px-5 ring-1 transition-shadow duration-200 focus-within:ring-2 sm:h-17 sm:px-8 ${
            isError ? "ring-flame focus-within:ring-flame" : "ring-transparent focus-within:ring-violet"
          }`}
        >
          <MailIcon />
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle" && status !== "loading") setStatus("idle");
            }}
            aria-invalid={isError}
            aria-describedby={messageId}
            className="min-w-0 flex-1 bg-transparent text-sm text-gunmetal placeholder:text-gunmetal/80 focus:outline-none"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="relative h-14 cursor-pointer overflow-hidden rounded-[10px] bg-linear-to-b from-[#ff946d] to-[#ff7d68] px-12 font-open text-[17px] font-semibold text-white shadow-[0_12px_24px_-12px_rgb(255_125_104/0.8)] transition-shadow hover:shadow-[0_18px_30px_-12px_rgb(255_125_104/0.9)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet disabled:cursor-wait sm:h-17 sm:w-45 sm:px-0"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={status === "loading" ? "loading" : "label"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <span aria-hidden className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending…
                </>
              ) : (
                "Subscribe"
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <p
        id={messageId}
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-6 text-center text-sm font-medium sm:text-left ${isError ? "text-flame" : "text-teal"}`}
      >
        {isError && "Please enter a valid email address, like name@example.com."}
        {status === "success" && "You're subscribed! Watch your inbox for our latest offers."}
      </p>
    </form>
  );
}
