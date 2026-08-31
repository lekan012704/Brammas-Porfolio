import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  service: z.string().trim().max(120).optional(),
  details: z.string().trim().max(1000).optional(),
});

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-faint focus:border-primary focus:ring-2 focus:ring-ring/25";

const labelClass =
  "font-mono text-[0.68rem] tracking-[0.1em] text-muted-foreground uppercase";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert({
      full_name: parsed.data.full_name,
      phone: parsed.data.phone,
      service: parsed.data.service || null,
      details: parsed.data.details || null,
    });
    setLoading(false);

    if (error) {
      toast.error("Could not send your request. Please try again.");
      return;
    }

    toast.success("Request sent — we'll get back to you shortly.");
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft"
    >
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="full_name">
          Full name
        </label>
        <input id="full_name" name="full_name" placeholder="Your name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="phone">
          Phone number
        </label>
        <input id="phone" name="phone" placeholder="080 0000 0000" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="service">
          Service needed
        </label>
        <input
          id="service"
          name="service"
          placeholder="e.g. AC repair, cold room"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="details">
          Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Tell us about the job"
          className={`${fieldClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? <Loader2 className="size-4 animate-spin" /> : null}
        Send Request
        {!loading && <ArrowRight className="size-4" />}
      </button>
    </form>
  );
}
