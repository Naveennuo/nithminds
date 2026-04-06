import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

const logo = new URL("../../assets/nithminds-logo.png", import.meta.url).href;

/* ================= MENU DATA ================= */

const MENU = {
  company: [
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact" },
    { name: "Social Media", path: "/social-media" },
  ],
  services: [
    { name: "Website Development", path: "/services/website-development" },
    { name: "Mobile App Development", path: "/services/mobile-app-development" },
    { name: "Cloud", path: "/services/cloud" },
    { name: "DevOps", path: "/services/devops" },
    { name: "Testing", path: "/services/testing" },
  ],
  otherServices: [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Recruitment", path: "/services/recruitment" },
    { name: "Training", path: "/training" },
  ],
};

/* ================= DROPDOWN COMPONENT ================= */

function Dropdown({
  label,
  items,
  active,
  setActive,
}: {
  label: string;
  items: { name: string; path: string }[];
  active: string | null;
  setActive: (val: string | null) => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(label)}
      onMouseLeave={() => setActive(null)}
    >
      <button className="font-poppins font-medium text-[16px] text-[#002548] hover:text-[#0049ad] flex items-center gap-1">
        {label}
        <motion.div animate={{ rotate: active === label ? 180 : 0 }}>
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {active === label && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
          >
            {items.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="block px-4 py-2.5 text-[#002548] hover:bg-gradient-to-r hover:from-[#daf4ff] hover:to-[#f0f9ff] transition font-poppins"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================= HEADER ================= */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 font-poppins"
    >
      <nav className="max-w-[1440px] mx-auto px-6 lg:px-[90px] py-4 gap-10 items-center">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <motion.img
              src={logo}
              alt="Nithminds"
              className="h-12"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Dropdown
              label="Company"
              items={MENU.company}
              active={activeMenu}
              setActive={setActiveMenu}
            />

            <Link to="/clients" className="font-medium text-[#002548] hover:text-[#0049ad]">
              Clients
            </Link>

            <Dropdown
              label="Software Development Services"
              items={MENU.services}
              active={activeMenu}
              setActive={setActiveMenu}
            />

            <Dropdown
              label="Other Services"
              items={MENU.otherServices}
              active={activeMenu}
              setActive={setActiveMenu}
            />

            <Link to="/products" className="font-medium text-[#002548] hover:text-[#0049ad]">
              Products
            </Link>

            <Link to="/updates" className="font-medium text-[#002548] hover:text-[#0049ad]">
              Gallery
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 space-y-2 overflow-hidden font-poppins"
            >
              <Link to="/" className="block py-2 hover:text-[#0049ad]">Home</Link>
              <Link to="/about-us" className="block py-2 hover:text-[#0049ad]">About Us</Link>
              <Link to="/social-media" className="block py-2 hover:text-[#0049ad]">Social Media</Link>
              <Link to="/clients" className="block py-2 hover:text-[#0049ad]">Clients</Link>
              <p className="pt-2 text-sm font-semibold text-[#002548]">Software Development Services</p>
              <Link to="/services/website-development" className="block py-2 pl-3 hover:text-[#0049ad]">Website Development</Link>
              <Link to="/services/mobile-app-development" className="block py-2 pl-3 hover:text-[#0049ad]">Mobile App Development</Link>
              <Link to="/services/cloud" className="block py-2 pl-3 hover:text-[#0049ad]">Cloud</Link>
              <Link to="/services/devops" className="block py-2 pl-3 hover:text-[#0049ad]">DevOps</Link>
              <Link to="/services/testing" className="block py-2 pl-3 hover:text-[#0049ad]">Testing</Link>
              <p className="pt-2 text-sm font-semibold text-[#002548]">Other Services</p>
              <Link to="/services/digital-marketing" className="block py-2 pl-3 hover:text-[#0049ad]">Digital Marketing</Link>
              <Link to="/services/recruitment" className="block py-2 pl-3 hover:text-[#0049ad]">Recruitment</Link>
              <Link to="/training" className="block py-2 pl-3 hover:text-[#0049ad]">Training</Link>
              <Link to="/products" className="block py-2 hover:text-[#0049ad]">Products</Link>
              <Link to="/updates" className="block py-2 hover:text-[#0049ad]">Gallery</Link>
              <Link to="/contact" className="block py-2 hover:text-[#0049ad]">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}
