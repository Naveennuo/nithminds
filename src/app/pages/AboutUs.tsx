export function AboutUs() {
  const ceoImage = new URL("../../assets/Gopi.jpeg", import.meta.url).href;

  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-[#0049ad] to-[#21a9f9] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white text-[48px] lg:text-[70px] mb-6">
            About Nithminds
          </h1>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium text-white/90 text-[20px] lg:text-[28px] max-w-4xl mx-auto">
            Practical expertise, accountable delivery, and long-term business impact.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[36px] lg:text-[44px] mb-8 text-center">
              Nithminds Private Limited
            </h2>

            <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] lg:text-[20px] leading-relaxed text-center mb-10 max-w-4xl mx-auto">
              Nithminds Private Limited is led by its Founder and CEO, Gopi Natarajan, who co-founded the organization in November 2023 alongside Director Gopi Baby.
            </p>

            <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] lg:text-[20px] leading-relaxed text-center mb-10 max-w-4xl mx-auto">
              Since its inception in November 2023, Nithminds Private Limited has rapidly established itself as a versatile technology partner, delivering end-to-end digital solutions tailored to modern business needs. The company specializes in high-quality software development for web and mobile platforms, complemented by robust expertise in DevOps, cloud infrastructure, and rigorous quality assurance.
            </p>

            <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[18px] lg:text-[20px] leading-relaxed text-center mb-12 max-w-4xl mx-auto">
              Beyond technical execution, Nithminds empowers organizations through strategic digital marketing, specialized corporate training, and efficient recruitment and consulting services. By bridging the gap between talent and technology, the firm helps clients scale their operations with agility and precision.
            </p>

            <div className="flex justify-center mb-16">
              <img
                src={ceoImage}
                alt="CEO Gopi Natarajan"
                className="rounded-3xl shadow-2xl w-full max-w-[400px] lg:max-w-[450px] object-cover border-8 border-[#f0f9ff]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#f8fcff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#0049ad] text-[36px] lg:text-[44px] mb-12 text-center">
              About Gopi Natarajan
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <div>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-3">
                    Visionary Leadership
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[17px] lg:text-[18px] leading-relaxed">
                    With over 20 years of experience in the technology sector, the Founder and CEO of Nithminds Private Limited brings a profound depth of expertise across all phases of the Software Development Life Cycle (SDLC). Their technical foundation is rooted in the Java/J2EE ecosystem, spanning from legacy frameworks like Struts and EJB to modern architectures involving Spring Boot, Microservices, and RESTful APIs.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-3">
                    World-Class Certifications
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[17px] lg:text-[18px] leading-relaxed">
                    This veteran leadership is backed by an elite collection of certifications, including PRINCE2 Practitioner, Certified Scrum Master (CSM), and SAFe 5 Scrum Master, ensuring that every project is managed with world-class agile and traditional methodologies. Cloud proficiency is particularly distinguished, holding multiple advanced certifications in both AWS and Oracle Cloud Infrastructure (OCI) at the Architect Professional level.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-3">
                    DevOps & Operational Excellence
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[17px] lg:text-[18px] leading-relaxed">
                    Beyond coding and architecture, the CEO's expertise extends to DevOps mastery, utilizing tools like Jenkins, Git, and SonarQube to drive operational excellence and CMM Level standards. Their background in financial markets through NSE certifications provides a unique business perspective, allowing the firm to deliver solutions that are not only technically sound but also financially strategic.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-3">
                    Digital Transformation Pioneer
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[17px] lg:text-[18px] leading-relaxed">
                    By integrating deep-rooted hands-on development skills with high-level consulting and recruitment insights, they have positioned Nithminds as a powerhouse of digital transformation. Under his guidance, the firm has quickly expanded from core software development into high-growth areas like DevOps, cloud management, and specialized technical training, ensuring clients receive scalable, secure, and future-proof enterprise applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[36px] lg:text-[44px] mb-12 text-center">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Excellence",
                  description: "Strong coding practices, testing standards, and secure implementation patterns to ensure stable, scalable production systems.",
                },
                {
                  title: "Business Alignment",
                  description: "Every engagement maps technical solutions to clear business goals, with measurable milestones and transparent reporting.",
                },
                {
                  title: "Talent Development",
                  description: "We support client teams with training programs so delivery capability and technical maturity continue after project handover.",
                },
              ].map((item) => (
                <article key={item.title} className="bg-[#f8fcff] rounded-2xl p-8 border border-[#dceeff] hover:shadow-lg transition-shadow">
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-4">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[16px] lg:text-[17px] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}