import { Link } from 'react-router-dom';
import imgImage4 from "../../../assets/mobile-app-development.svg";

export function MobileAppDevelopment() {
  const services = [
    {
      title: "Native App Development",
      description: "Nithminds Private Limited develops native apps specifically for a single platform—Android or iOS—using platform-specific languages such as Kotlin, Java, or Swift. These apps offer the highest levels of performance, security, and device-level integration."
    },
    {
      title: "Cross-Platform App Development",
      description: "Nithminds Private Limited offers cross-platform app development, enabling teams to build a single application that runs on both Android and iOS using frameworks like React Native or Flutter. This approach reduces development time and cost while ensuring a consistent user experience."
    },
    {
      title: "Hybrid Mobile App Development",
      description: "Nithminds Private Limited develops hybrid apps using web technologies such as HTML, CSS, and JavaScript, wrapped in a native container. These apps offer faster development and easy deployment, making them ideal for businesses looking for a quick market entry."
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Nithminds Private Limited develops Progressive Web Apps (PWAs), which are web applications that behave like mobile apps—fast, installable, and offline-capable. They work across devices without the need to be downloaded from app stores."
    },
    {
      title: "Enterprise Mobile App Development",
      description: "Nithminds Private Limited develops enterprise apps that are custom-built for internal company use to streamline processes, enhance productivity, and securely integrate with business systems such as ERP, CRM, and HR platforms."
    },
    {
      title: "E-commerce Mobile App Development",
      description: "Nithminds Private Limited develops e-commerce applications that support product browsing, secure payments, order tracking, and personalized shopping experiences across all devices."
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
                <img src={imgImage4} alt="Mobile App Development" className="size-32" />
              </div>
            </div>
            <h1 className="bg-clip-text bg-gradient-to-r font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#0819ae] from-[1.554%] leading-[1.1] text-[48px] lg:text-[60px] to-[#40aeff] via-[#0049ad] via-[54.689%]" style={{ WebkitTextFillColor: "transparent" }}>
              Mobile App Development
            </h1>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[20px] lg:text-[24px] max-w-4xl mx-auto leading-relaxed">
              Create powerful, intuitive mobile applications that engage users and drive business growth. From native to cross-platform solutions, we build apps that deliver exceptional performance and user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[40px] lg:text-[50px] text-center mb-12">
            Our Mobile App Development Services
          </h2>
          <div className="space-y-6">
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[36px] lg:text-[48px] mb-6">
            Ready to Build Your Mobile App?
          </h2>
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
