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
