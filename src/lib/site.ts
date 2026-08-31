export const site = {
  name: "Brammas Cooling Solution",
  phone: "+234 090 281 117 61",
  whatsapp: "+234 081 000 813 89",
  email: " tewogbola20@gmail.com",
  address: "Lagos  ogun Òsogbo and it's environment",
  hours: "Mon – Sat, 8am – 6pm · Emergency 24/7",
};

export const telHref = `tel:${site.phone.replace(/\s/g, "")}`;
export const smsHref = `sms:${site.phone.replace(/\s/g, "")}`;
export const waHref = `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`;
export const mailHref = `mailto:${site.email}`;
