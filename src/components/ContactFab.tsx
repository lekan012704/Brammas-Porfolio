import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, MessageSquareText, Plus, X } from "lucide-react";
import { mailHref, smsHref, waHref } from "@/lib/site";

const options = [
  {
    label: "WhatsApp",
    href: waHref,
    icon: MessageCircle,
    tone: "bg-whatsapp text-white",
  },
  {
    label: "Email us",
    href: mailHref,
    icon: Mail,
    tone: "bg-primary text-primary-foreground",
  },
  {
    label: "Text message",
    href: smsHref,
    icon: MessageSquareText,
    tone: "bg-warm text-warm-foreground",
  },
];

export function ContactFab() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3"
    >
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {options.map(({ label, href, icon: Icon, tone }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full border border-border bg-card py-1.5 pr-5 pl-1.5 shadow-soft transition-colors hover:border-primary"
          >
            <span
              className={`flex size-9 items-center justify-center rounded-full ${tone}`}
            >
              <Icon className="size-4.5" strokeWidth={2.2} />
            </span>
            <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="relative flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-105"
      >
        {!open && (
          <span className="animate-fab-ping absolute inset-0 rounded-full bg-whatsapp" />
        )}
        <span className="relative">
          {open ? <X className="size-6" /> : <Plus className="size-6" />}
        </span>
      </button>
    </div>
  );
}
