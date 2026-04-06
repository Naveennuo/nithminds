import { Link } from 'react-router-dom';
import imgImage6 from "../../../assets/devops-services.svg";

export function DevOps() {
  return (
    <div className="w-full">
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-[#daf4ff] rounded-full p-8">
                <img src={imgImage6} alt="DevOps Services" className="size-32" />
              </div>
            </div>
            <h1 className="bg-clip-text bg-gradient-to-r font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#0819ae] from-[1.554%] leading-[1.1] text-[48px] lg:text-[60px] to-[#40aeff] via-[#0049ad] via-[54.689%]" style={{ WebkitTextFillColor: "transparent" }}>
              DevOps Services
            </h1>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[20px] lg:text-[24px] max-w-4xl mx-auto leading-relaxed">
              Nithminds provides DevOps implementation and consulting focusing on cloud technologies like AWS and Azure. We offer expertise in DevOps toolchains and practices, including CI/CD and automation for efficient software delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <Link 
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#0049ad] to-[#21a9f9] text-white px-10 py-4 rounded-full font-['Poppins:SemiBold',sans-serif] text-[20px] hover:shadow-lg transition-shadow"
          >
            Get Started with DevOps
          </Link>
        </div>
      </section>
    </div>
  );
}
