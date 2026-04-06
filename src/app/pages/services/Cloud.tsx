import { Link } from 'react-router-dom';
import imgImage5 from "../../../assets/cloud-services.svg";

export function Cloud() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-[#daf4ff] rounded-full p-8">
                <img src={imgImage5} alt="Cloud Services" className="size-32" />
              </div>
            </div>
            <h1 className="bg-clip-text bg-gradient-to-r font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#0819ae] from-[1.554%] leading-[1.1] text-[48px] lg:text-[60px] to-[#40aeff] via-[#0049ad] via-[54.689%]" style={{ WebkitTextFillColor: "transparent" }}>
              Cloud Services
            </h1>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[20px] lg:text-[24px] max-w-4xl mx-auto leading-relaxed">
              Cloud migration and transformation services involve strategizing, planning, and executing the move of applications and data to the cloud. They often encompass modernizing IT architecture and leveraging cloud-native tools for better agility and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[40px] lg:text-[50px] text-center mb-12">
            We Support Leading Cloud Platforms
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8fcff] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[32px] mb-4">AWS</h3>
              <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] leading-relaxed">
                Amazon Web Services - comprehensive cloud computing platform with extensive services and global infrastructure.
              </p>
            </div>
            <div className="bg-[#f8fcff] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[32px] mb-4">Azure</h3>
              <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] leading-relaxed">
                Microsoft Azure - integrated cloud services for building, deploying, and managing applications through Microsoft datacenters.
              </p>
            </div>
            <div className="bg-[#f8fcff] rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[32px] mb-4">GCP</h3>
              <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] leading-relaxed">
                Google Cloud Platform - suite of cloud computing services running on the same infrastructure that Google uses internally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[36px] lg:text-[48px] mb-6">
            Ready to Move to the Cloud?
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
