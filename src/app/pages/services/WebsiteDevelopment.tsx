import imgImage3 from "../../../assets/website-development.svg";
import imgImage11 from "../../../assets/website-offering-custom-design-icon.png";
import imgImage12 from "../../../assets/website-offering-responsive-icon.png";
import imgImage13 from "../../../assets/website-offering-backend-icon.png";
import imgImage14 from "../../../assets/website-offering-ecommerce-icon.png";
import imgImage15 from "../../../assets/website-offering-cms-icon.png";
import imgImage16 from "../../../assets/website-offering-seo-icon.png";
import { Link } from 'react-router-dom';

export function WebsiteDevelopment() {
  const offerings = [
    {
      title: "Custom Website Design",
      description: "We craft visually appealing, user-centric designs that reflect your brand identity. From layout to color psychology, every element is thoughtfully created to deliver an immersive digital experience.",
      icon: imgImage11
    },
    {
      title: "Responsive Development",
      description: "Mobile-first is now mobile-only for many users. Our responsive design approach ensures that your website looks pixel-perfect and functions smoothly across all devices, from desktop to smartphone.",
      icon: imgImage12
    },
    {
      title: "Secure & Scalable Backend",
      description: "We build websites with robust server-side architecture using cutting-edge tech stacks. Talk about ready architectures. Your website is secure, scalable, and prepared for future expansion.",
      icon: imgImage13
    },
    {
      title: "E-commerce Solutions",
      description: "We help businesses move online with features like product catalogs, secure payment gateways, shopping carts, and customer management features for a seamless shopping experience. From Shopify to WooCommerce to custom e-commerce builds, we build it all.",
      icon: imgImage14
    },
    {
      title: "CMS Development",
      description: "We support WordPress, Drupal, or Joomla. Enable businesses to easily manage, edit, and publish content using these platforms, without requiring heavy technical knowledge.",
      icon: imgImage15
    },
    {
      title: "SEO-Optimized Structure",
      description: "Our websites ship with SEO best practices—clean code, optimized content structures, fast load times, and schema implementation—to help you rank higher organically.",
      icon: imgImage16
    }
  ];

  const services = [
    {
      title: "E-commerce Web Development",
      description: "Nithminds Private Limited offers E-commerce web development that focuses on creating online stores complete with product catalogs, secure payment gateways, shopping carts, and customer management features for a seamless shopping experience."
    },
    {
      title: "Progressive Web App (PWA) Development",
      description: "Nithminds Private Limited offers PWA development. PWAs combine the best features of web and mobile apps, offering offline access, fast loading, and an app-like experience without requiring installation from app stores."
    },
    {
      title: "Single Page Application (SPA) Development",
      description: "Nithminds Private Limited offers SPA development. SPAs load a single HTML page and dynamically update content, providing faster interactions and smoother user experiences similar to desktop applications."
    },
    {
      title: "Enterprise Web Application Development",
      description: "Nithminds Private Limited offers Enterprise web apps, which are designed for internal organizational use. These apps integrate workflows, CRM/ERP systems, and reporting tools to improve productivity and efficiency."
    },
    {
      title: "Portal Web Development",
      description: "Nithminds Private Limited offers Web portal development. Web portals provide centralized access to information, resources, and services for specific audiences, such as employee portals, client dashboards, or membership sites."
    },
    {
      title: "Content Management System (CMS) Development",
      description: "Nithminds Private Limited offers CMS-based web development, which enables businesses to easily manage, edit, and publish content using platforms like WordPress, Drupal, or Joomla, without requiring heavy technical knowledge."
    },
    {
      title: "Social Networking Web Application Development",
      description: "Nithminds Private Limited offers Social networking web app development. These apps allow users to interact, share content, and communicate through features like messaging, groups, profiles, and notifications."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-[#daf4ff] rounded-full p-8">
                <img src={imgImage3} alt="Website Development" className="size-32" />
              </div>
            </div>
            <h1 className="bg-clip-text bg-gradient-to-r font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#0819ae] from-[1.554%] leading-[1.1] text-[48px] lg:text-[60px] to-[#40aeff] via-[#0049ad] via-[54.689%]" style={{ WebkitTextFillColor: "transparent" }}>
              Website Design & Development
            </h1>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[28px] lg:text-[36px] max-w-5xl mx-auto">
              Transform Your Digital Presence with a High-Performing Website
            </p>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[20px] lg:text-[24px] max-w-5xl mx-auto leading-relaxed">
              Your website is often the first impression of your brand—and we make sure it's unforgettable. At Nithminds, we design and develop websites that combine aesthetic excellence, seamless user experiences, and performance-driven technology. Whether you're a startup or an enterprise, our websites are built to convert visitors into customers.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[40px] lg:text-[50px] text-center mb-16">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-[20px] p-8 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="bg-[#daf4ff] rounded-full p-6 w-fit mb-6">
                  <img src={offering.icon} alt={offering.title} className="size-20" />
                </div>
                <div className="h-px bg-[#DCDCDC] mb-6" />
                <h3 className="font-['Poppins:Bold',sans-serif] text-[#002548] text-[24px] mb-4 leading-tight">
                  {offering.title}
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#808080] text-[18px] leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 lg:py-24 bg-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[40px] lg:text-[50px] text-center mb-4">
            Our Website Development Services
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[20px] text-center mb-12 max-w-3xl mx-auto">
            We offer a comprehensive range of web development solutions tailored to your needs
          </p>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-3">
                  {index + 1}. {service.title}
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[36px] lg:text-[48px] mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-white/90 text-[20px] mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives results
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-[#0049ad] px-10 py-4 rounded-full font-['Poppins:SemiBold',sans-serif] text-[20px] hover:shadow-lg transition-shadow"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
