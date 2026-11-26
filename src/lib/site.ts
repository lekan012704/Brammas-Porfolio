export const site = {
  name: "Brammas Cooling Solution",
  phone: "+234 090 281 117 61",
  whatsapp: "+234 081 000 813 89",
  email: "tewogbola20@gmail.com",
  address: "Lagos, Ogun, Osogbo and its environment",
  hours: "Mon – Sat, 8am – 6pm · Emergency 24/7",
  openingHoursSpec: "Mo-Sa 08:00-18:00",
};

export const telHref = `tel:${site.phone.replace(/\s/g, "")}`;
export const smsHref = `sms:${site.phone.replace(/\s/g, "")}`;
export const waHref = `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`;
export const mailHref = `mailto:${site.email}`;

export const mapEmbedHref = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.name} ${site.address}`,
)}&output=embed`;
export const mapSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address,
)}`;
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address,
)}`;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
  },
  openingHours: site.openingHoursSpec,
  sameAs: [waHref],
};
