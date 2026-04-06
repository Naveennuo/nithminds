import { Link } from 'react-router-dom';
import imgImage10 from "../../../assets/digital-marketing-seo.svg";

export function DigitalMarketing() {
  const services = [
    {
      title: "SEM (Search Engine Marketing)",
      description: "Nithminds Private Limited helps clients immediately drive targeted traffic and visibility through paid ads on search engine results pages (e.g., Google Ads)."
    },
    {
      title: "SEO (Search Engine Optimization)",
      description: "Nithminds Private Limited focuses on improving organic search rankings to earn long-term, high-quality, unpaid website traffic."
    },
    {
      title: "Lead Generation",
      description: "Nithminds Private Limited offers the service of attracting and converting prospects into individuals who have indicated interest in your company's product or service."
    },
    {
      title: "Branding",
      description: "Nithminds Private Limited's branding service involves shaping the public's perception of your company, establishing trust, and ensuring a consistent identity across all platforms."
    },
    {
      title: "Social Media Management",
      description: "Nithminds Private Limited provides social media management, which entails creating, scheduling, analyzing, and engaging with content across platforms to build community and drive awareness."
    },
    {
      title: "Email Marketing",
      description: "Nithminds Private Limited offers email marketing as a direct and personalized method to nurture leads, drive conversions, and retain customers through targeted messages sent to subscribers."
    }
  ];

  return (
    <div className="w-full">
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-[#daf4ff] rounded-full p-8">
                <img src={imgImage10} alt="Digital Marketing" className="size-32" />
              </div>
            </div>
            <h1 className="bg-clip-text bg-gradient-to-r font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#0819ae] from-[1.554%] leading-[1.1] text-[48px] lg:text-[60px] to-[#40aeff] via-[#0049ad] via-[54.689%]" style={{ WebkitTextFillColor: "transparent" }}>
              Digital Marketing Services
            </h1>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[20px] lg:text-[24px] max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions to grow your online presence, attract quality leads, and drive revenue growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[40px] lg:text-[50px] text-center mb-12">
            Our Digital Marketing Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#f8fcff] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-3">
                  {service.title}
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[36px] lg:text-[48px] mb-6">
            Grow Your Business Online
          </h2>
          <Link 
            to="/contact"
            className="inline-block bg-white text-[#0049ad] px-10 py-4 rounded-full font-['Poppins:SemiBold',sans-serif] text-[20px] hover:shadow-lg transition-shadow"
          >
            Start Marketing
          </Link>
        </div>
      </section>
    </div>
  );
}
