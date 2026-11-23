import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import type { LucideProps } from "lucide-react";

const logo = new URL("../../assets/nithminds-logo.png", import.meta.url).href;

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

const SOCIAL = [
  { Icon: Instagram, url: "https://www.instagram.com/nithminds/", label: "Instagram" },
  { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61554978667187", label: "Facebook" },
  { Icon: XIcon, url: "https://www.twitter.com/nithminds", label: "X" },
  { Icon: Youtube, url: "https://www.youtube.com/@nithmindspvtltd", label: "YouTube" },
  { Icon: Linkedin, url: "https://www.linkedin.com/company/103766938", label: "LinkedIn" },
  { Icon: WhatsAppIcon, url: "https://whatsapp.com/channel/0029Vb8EDS3GpLHIWGcvRb1P", label: "WhatsApp Channel" },
];

const QUICK = [
  { name: "About Us", path: "/about-us" },
  { name: "News", path: "/news" },
  { name: "Services", path: "/services/website-development" },
  { name: "Training", path: "/training" },
  { name: "Products", path: "/products" },
  { name: "Social Media", path: "/social-media" },
  { name: "Recruitment", path: "/services/recruitment" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export function Footer() {
    return (
    <footer className="bg-[#001133] text-white font-poppins">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Reveal>
            <img src={logo} alt="Nithminds" className="h-12 mb-4 rounded-[6px]" />
            <p className="text-[14px] text-gray-300 leading-relaxed">
              Founded in November 2023, Nithminds Private Limited offers software development, DevOps, cloud, testing, digital marketing, training, recruitment, and consulting services.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-bold text-[18px] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-gray-300 hover:text-[#40aeff] transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-bold text-[18px] mb-4">Contact Us</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="size-5 shrink-0 mt-1 text-[#40aeff]" />
                <p className="text-gray-300 text-[14px]">
                  Innov8 Millenia, 2nd Floor, East Wing, RMZ Millenia Business Park, Campus 1A, No.143, DR.M.G.R. Road, Perungudi, Chennai - 600096
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="size-5 text-[#40aeff]" />
                <a href="mailto:hr@nithminds.com" className="text-gray-300 hover:text-[#40aeff] transition-colors">
                  hr@nithminds.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="size-5 text-[#40aeff]" />
                <a href="tel:+919500155377" className="text-gray-300 hover:text-[#40aeff] transition-colors">
                  +91-9500155377
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <h3 className="font-bold text-[18px] mb-4">Follow Us</h3>
            <div className="flex gap-3 flex-wrap">
              {SOCIAL.map(({ Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="bg-white/10 hover:bg-[#40aeff] p-2 rounded-full transition-colors"
                >
                  <Icon className="size-5" />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center items-center text-center">
          <p className="text-gray-400 text-[14px]">Copyright @ 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

