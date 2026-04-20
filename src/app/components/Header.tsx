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
    { name: "AI Services", path: "/services/ai-services" },
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

function MobileDropdown({
  label,
  items,
  active,
  setActive,
  onNavigate,
}: {
  label: string;
  items: { name: string; path: string }[];
  active: string | null;
  setActive: (val: string | null) => void;
  onNavigate: () => void;
}) {
  const isOpen = active === label;

  return (
    <div className="border-b border-[#e6eef8] last:border-b-0">
      <button
        type="button"
        onClick={() => setActive(isOpen ? null : label)}
        className="flex w-full items-center justify-between py-3 text-left font-medium text-[#002548] hover:text-[#0049ad]"
      >
        <span>{label}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden pb-2"
          >
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2 text-[#002548] transition hover:bg-[#f3f8ff] hover:text-[#0049ad]"
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
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (!next) {
        setMobileActiveMenu(null);
      }
      return next;
    });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 font-poppins"
    >
      <nav className="relative max-w-[1440px] mx-auto px-6 lg:px-[90px] py-4 gap-10 items-center">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu}>
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
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="absolute left-0 right-0 top-full z-50 mt-3 lg:hidden rounded-2xl border border-[#dce7f5] bg-white px-5 py-4 shadow-xl font-poppins"
            >
              <div className="space-y-1">
                <MobileDropdown
                  label="Company"
                  items={MENU.company}
                  active={mobileActiveMenu}
                  setActive={setMobileActiveMenu}
                  onNavigate={closeMobileMenu}
                />

                <Link
                  to="/clients"
                  onClick={closeMobileMenu}
                  className="block border-b border-[#e6eef8] py-3 font-medium text-[#002548] hover:text-[#0049ad]"
                >
                  Clients
                </Link>

                <MobileDropdown
                  label="Software Development Services"
                  items={MENU.services}
                  active={mobileActiveMenu}
                  setActive={setMobileActiveMenu}
                  onNavigate={closeMobileMenu}
                />

                <MobileDropdown
                  label="Other Services"
                  items={MENU.otherServices}
                  active={mobileActiveMenu}
                  setActive={setMobileActiveMenu}
                  onNavigate={closeMobileMenu}
                />

                <Link
                  to="/products"
                  onClick={closeMobileMenu}
                  className="block border-b border-[#e6eef8] py-3 font-medium text-[#002548] hover:text-[#0049ad]"
                >
                  Products
                </Link>

                <Link
                  to="/updates"
                  onClick={closeMobileMenu}
                  className="block py-3 font-medium text-[#002548] hover:text-[#0049ad]"
                >
                  Gallery
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}
