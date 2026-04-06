import { Phone } from "lucide-react";

const whatsappIcon = new URL("../../assets/whatsapp.svg", import.meta.url).href;

export function FloatingContactButtons() {
  return (
    <>
      <a
        href="tel:+919500155377"
        aria-label="Call Nithminds"
        className="fixed bottom-6 left-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0f62fe] text-white shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105"
      >
        <Phone className="size-7" />
      </a>

      <a
        href="https://wa.me/919500155377"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Nithminds"
        className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="rounded-full bg-white p-1" />
      </a>
    </>
  );
}
