import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

export function Recruitment() {
  return (
    <div className="w-full">
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-[#daf4ff] rounded-full p-8">
                <Users className="size-32 text-[#0049ad]" />
              </div>
            </div>
            <h1 className="bg-clip-text bg-gradient-to-r font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#0819ae] from-[1.554%] leading-[1.1] text-[48px] lg:text-[60px] to-[#40aeff] via-[#0049ad] via-[54.689%]" style={{ WebkitTextFillColor: "transparent" }}>
              Recruitment Services
            </h1>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[20px] lg:text-[24px] max-w-4xl mx-auto leading-relaxed">
              Nithminds Private Limited provides end-to-end recruitment solutions designed to bridge the gap between top-tier talent and industry-leading organizations. We specialize in sourcing highly skilled professionals across diverse sectors, ensuring a perfect match for both technical expertise and cultural fit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[36px] lg:text-[48px] mb-6">
            Find the Right Talent for Your Team
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
