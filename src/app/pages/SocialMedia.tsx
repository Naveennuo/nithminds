import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

function XIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2H21l-6.57 7.51L22 22h-5.956l-4.664-6.104L6.04 22H3.28l7.027-8.03L2 2h6.107l4.216 5.523zM17.277 20.348h1.527L7.278 3.565H5.64z" />
    </svg>
  );
}

function WhatsAppIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/nithminds/",
    Icon: Instagram,
    accent: "from-[#ff6a00] to-[#ff1f7a]",
    description: "Follow us on Instagram",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61554978667187",
    Icon: Facebook,
    accent: "from-[#1877f2] to-[#0a4ebd]",
    description: "Connect with us on Facebook",
  },
  {
    label: "X",
    url: "https://www.twitter.com/nithminds",
    Icon: XIcon,
    accent: "from-[#111111] to-[#444444]",
    description: "Follow us on X",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@nithmindspvtltd",
    Icon: Youtube,
    accent: "from-[#ff0033] to-[#c70026]",
    description: "Watch us on YouTube",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/103766938",
    Icon: Linkedin,
    accent: "from-[#0a66c2] to-[#084785]",
    description: "Connect with us on LinkedIn",
  },
  {
    label: "WhatsApp Channel",
    url: "https://whatsapp.com/channel/0029Vb8EDS3GpLHIWGcvRb1P",
    Icon: WhatsAppIcon,
    accent: "from-[#25d366] to-[#128c7e]",
    description: "Join our WhatsApp Channel",
  },
] satisfies Array<{
  label: string;
  url: string;
  Icon: ComponentType<LucideProps>;
  accent: string;
  description: string;
}>;

export function SocialMedia() {
  return (
    <div className="w-full bg-[#f6fbff]">
      <section className="bg-gradient-to-r from-[#0049ad] to-[#21a9f9] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white text-[48px] lg:text-[70px] mb-6">
            Social Media
          </h1>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium text-white/90 text-[20px] lg:text-[28px] max-w-3xl mx-auto">
            Follow Nithminds for updates, events, and announcements
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[80px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#dceeff] bg-white p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className={`bg-gradient-to-r ${social.accent} rounded-full p-5 text-white`}>
                    <social.Icon className="size-8" />
                  </div>
                  <ExternalLink className="size-4 text-[#5e7aa5] group-hover:text-[#0049ad]" />
                </div>
                <p className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mt-5">
                  {social.label}
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[14px] mt-2">
                  {social.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
