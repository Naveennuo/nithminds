import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const logo = new URL("../../assets/nithminds-logo.png", import.meta.url).href;

const SOCIAL = [
  { Icon: Instagram, url: "https://www.instagram.com/nithminds/", label: "Instagram" },
  { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61554978667187", label: "Facebook" },
  { Icon: Twitter, url: "https://www.twitter.com/nithminds", label: "Twitter" },
  { Icon: Youtube, url: "https://www.youtube.com/channel/UC7aNSXs8Qi6H0nYyztOwKLQ", label: "YouTube" },
  { Icon: Linkedin, url: "https://www.linkedin.com/company/103766938", label: "LinkedIn" },
];

const QUICK = [
  { name: "About Us", path: "/about-us" },
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

