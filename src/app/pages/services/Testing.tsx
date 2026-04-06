import { Link } from 'react-router-dom';
import imgImage7 from "../../../assets/web-automation.svg";

export function Testing() {
  const testingServices = [
    {
      title: "Web-based Application Automation",
      description: "Selenium Webdriver is an open-source tool for automating web-based applications only. Users can test web applications using any web browser.",
      details: [
        "Types of OS for testing in Selenium: Windows, Mac, Linux",
        "Browsers supported for testing: Mozilla Firefox, Internet Explorer, Google Chrome, Safari, Opera"
      ]
    },
    {
      title: "Mobile-based Application Automation",
      description: "Appium is an open-source tool to test web applications running in mobile browsers. It also supports the automation of native and hybrid mobile applications developed for iOS and Android OS. Appium uses Selenium API to test the applications."
    },
    {
      title: "API Automation",
      description: "Testing is difficult in Java as compared to dynamic languages like Ruby and Groovy. REST Assured is a Java library that provides a domain-specific language (DSL) for writing powerful, maintainable tests for RESTful APIs. Most of the web services are based on REST architecture. Everything is a resource in the RESTful web service. It is lightweight, scalable, and allows creating easy to maintain web apps."
    }
  ];

  return (
    <div className="w-full">
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-[#daf4ff] rounded-full p-8">
                <img src={imgImage7} alt="Testing Services" className="size-32" />
              </div>
            </div>
            <h1 className="bg-clip-text bg-gradient-to-r font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#0819ae] from-[1.554%] leading-[1.1] text-[48px] lg:text-[60px] to-[#40aeff] via-[#0049ad] via-[54.689%]" style={{ WebkitTextFillColor: "transparent" }}>
              Testing Services
            </h1>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[20px] lg:text-[24px] max-w-4xl mx-auto leading-relaxed">
              Manual testing and Automation testing as services. Comprehensive quality assurance solutions for web, mobile, and API applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[40px] lg:text-[50px] text-center mb-12">
            Our Testing Services
          </h2>
          <div className="space-y-8">
            {testingServices.map((service, index) => (
              <div key={index} className="bg-[#f8fcff] rounded-lg p-8">
                <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-3">
                  {service.title}
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.details && (
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[16px] flex items-start gap-2">
                        <span className="text-[#0049ad] mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[36px] lg:text-[48px] mb-6">
            Ensure Quality with Our Testing Services
          </h2>
          <Link 
            to="/contact"
            className="inline-block bg-white text-[#0049ad] px-10 py-4 rounded-full font-['Poppins:SemiBold',sans-serif] text-[20px] hover:shadow-lg transition-shadow"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
