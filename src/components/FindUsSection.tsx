import { useState } from "react";
import { Check, Clock, Copy, MapPin, Navigation, Phone } from "lucide-react";
import { toast } from "sonner";
import {
  directionsHref,
  mapEmbedHref,
  mapSearchHref,
  site,
  telHref,
} from "@/lib/site";

export function FindUsSection() {
  const [copied, setCopied] = useState(false);
  const [mapFailed, setMapFailed] = useState(false);

  async function handleCopyAddress() {
    try {
      await navigator.clipboard.writeText(site.address);
      setCopied(true);
      toast.success("Address copied to clipboard");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy address");
    }
  }

  return (
    <section id="find-us" className="border-b border-border bg-secondary/60 py-16 lg:py-20">
      <div className="section-shell">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-sm text-primary">04</span>
          <h2 className="text-2xl font-bold sm:text-3xl">Find Us</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7">
            <h3 className="text-lg font-semibold">{site.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Visit us or reach out directly for fast AC, cold room and refrigeration service.
            </p>

            <ul className="mt-5 divide-y divide-border">
              <li className="flex items-start gap-4 py-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <MapPin className="size-4 shrink-0" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[0.66rem] tracking-[0.12em] text-muted-foreground uppercase">
                    Address
                  </div>
                  <div className="text-[0.95rem] font-medium break-words">{site.address}</div>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5 shrink-0 text-primary" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5 shrink-0" />
                        Copy address
                      </>
                    )}
                  </button>
                </div>
              </li>

              <li className="flex items-start gap-4 py-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Clock className="size-4 shrink-0" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[0.66rem] tracking-[0.12em] text-muted-foreground uppercase">
                    Opening hours
                  </div>
                  <div className="text-[0.95rem] font-medium break-words">{site.hours}</div>
                </div>
              </li>

              <li className="flex items-start gap-4 pt-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Phone className="size-4 shrink-0" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[0.66rem] tracking-[0.12em] text-muted-foreground uppercase">
                    Phone
                  </div>
                  <a
                    href={telHref}
                    className="inline-block text-[0.95rem] font-medium transition-colors hover:text-primary"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="min-w-0 flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              {mapFailed ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 p-8 text-center">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <MapPin className="size-6 shrink-0" />
                  </span>
                  <div className="text-base font-semibold">{site.name}</div>
                  <p className="max-w-[34ch] text-sm text-muted-foreground">{site.address}</p>
                  <p className="text-xs text-faint">
                    Map preview could not load. Use the buttons below to open Google Maps.
                  </p>
                </div>
              ) : (
                <iframe
                  src={mapEmbedHref}
                  title={`Google Map for ${site.name} at ${site.address}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setMapFailed(true)}
                  className="block aspect-[16/10] min-h-[320px] w-full border-0"
                />
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={mapSearchHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary sm:flex-initial"
              >
                <MapPin className="size-4 shrink-0" />
                Open in Google Maps
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 sm:flex-initial"
              >
                <Navigation className="size-4 shrink-0" />
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
