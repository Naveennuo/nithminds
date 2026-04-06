import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const socials = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/nithminds/",
    Icon: Instagram,
    accent: "from-[#ff6a00] to-[#ff1f7a]",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61554978667187",
    Icon: Facebook,
    accent: "from-[#1877f2] to-[#0a4ebd]",
  },
  {
    label: "Twitter",
    url: "https://www.twitter.com/nithminds",
    Icon: Twitter,
    accent: "from-[#1d9bf0] to-[#0f5fae]",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/channel/UC7aNSXs8Qi6H0nYyztOwKLQ",
    Icon: Youtube,
    accent: "from-[#ff0033] to-[#c70026]",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/103766938",
    Icon: Linkedin,
    accent: "from-[#0a66c2] to-[#084785]",
  },
];

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
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[14px] mt-2 break-all">
                  {social.url}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
