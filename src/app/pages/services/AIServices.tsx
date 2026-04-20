import { Link } from 'react-router-dom';
import imgAiServices from "../../../assets/ai_services.svg";

const aiCompetencies = [
  {
    title: "Generative AI & LLMs",
    description:
      "Customizing and integrating Large Language Models to automate content creation, customer support, and internal knowledge management.",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Developing predictive models that transform historical data into future insights.",
  },
  {
    title: "Adaptive AI Training",
    description:
      "Providing specialized corporate and academic training programs to upskill teams in the latest AI/ML frameworks.",
  },
  {
    title: "Cognitive Automation",
    description:
      "Implementing intelligent workflows that reduce manual overhead and increase operational efficiency.",
  },
];

export function AIServices() {
  return (
    <div className="w-full">
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-[#daf4ff] rounded-full p-8">
                <img src={imgAiServices} alt="AI Services" className="size-32" />
              </div>
            </div>
            <h1
              className="bg-clip-text bg-gradient-to-r font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#0819ae] from-[1.554%] leading-[1.1] text-[48px] lg:text-[60px] to-[#40aeff] via-[#0049ad] via-[54.689%]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              AI Services
            </h1>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[#515151] text-[20px] lg:text-[24px] max-w-5xl mx-auto leading-relaxed">
              At Nithminds Private Limited, we bridge the gap between complex data and actionable intelligence.
              We specialize in architecting and deploying cutting-edge Artificial Intelligence and Machine
              Learning solutions that empower businesses to automate processes, enhance decision-making, and
              unlock new revenue streams.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[36px] lg:text-[48px] text-center mb-12">
            Our Core AI Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aiCompetencies.map((competency) => (
              <div key={competency.title} className="bg-[#f8fcff] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[28px] mb-4">
                  {competency.title}
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] leading-relaxed">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[36px] lg:text-[48px] mb-6">
            Build AI Solutions That Scale
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
