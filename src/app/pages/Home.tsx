import { useEffect } from "react";
import { Link } from "react-router-dom";

const heroImg = new URL("../../assets/digital-solutions.svg", import.meta.url).href;
const whyImg1 = new URL("../../assets/why-nithminds-team-1.png", import.meta.url).href;
const whyImg2 = new URL("../../assets/why-nithminds-team-2.png", import.meta.url).href;

const websiteImg = new URL("../../assets/website-development.svg", import.meta.url).href;
const mobileImg = new URL("../../assets/mobile-app-development.svg", import.meta.url).href;
const cloudImg = new URL("../../assets/cloud-services.svg", import.meta.url).href;
const devopsImg = new URL("../../assets/devops-services.svg", import.meta.url).href;
const testingImg = new URL("../../assets/web-automation.svg", import.meta.url).href;
const marketingImg = new URL("../../assets/digital-marketing-seo.svg", import.meta.url).href;

const services = [
  {
    title: "Website Design and Development",
    img: websiteImg,
    link: "/services/website-development",
    desc:
      "Custom business websites, ecommerce storefronts, and CMS platforms built for performance, security, and conversion.",
  },
  {
    title: "Mobile App Development",
    img: mobileImg,
    link: "/services/mobile-app-development",
    desc:
      "Native and cross-platform applications with intuitive UX, robust backend integration, and reliable release pipelines.",
  },
  {
    title: "Cloud Services",
    img: cloudImg,
    link: "/services/cloud",
    desc:
      "Cloud migration, modernization, and architecture support across AWS, Azure, and GCP for scalability and resilience.",
  },
  {
    title: "DevOps Engineering",
    img: devopsImg,
    link: "/services/devops",
    desc:
      "CI/CD automation, infrastructure as code, and observability to accelerate releases while improving quality and uptime.",
  },
  {
    title: "Software Testing and Automation",
    img: testingImg,
    link: "/services/testing",
    desc:
      "Manual and automation testing for web products using Selenium and modern QA workflows for reliable production delivery.",
  },
  {
    title: "Digital Marketing and SEO",
    img: marketingImg,
    link: "/services/digital-marketing",
    desc:
      "Search optimization, social media strategy, and performance campaigns that grow visibility, reach, and qualified leads.",
  },
];

export function Home() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full text-[#002548]">
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[90px] py-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="anim-fade-left">
            <h1 className="font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] bg-gradient-to-r from-[#0819ae] from-[1.554%] to-[#40aeff] via-[#0049ad] via-[54.689%] bg-clip-text text-transparent">
              Elevate your business with AI-powered Application Development and Training Services
            </h1>

            <p className="mt-6 text-[#515151] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.8] max-w-[600px] anim-delay-1">
              Nithminds delivers scalable digital products and industry-focused training programs for startups, enterprises, and academic institutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 anim-delay-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#184f9c] to-[#2aa8f2] text-white px-8 py-3 font-semibold hover:scale-[1.03] active:scale-[0.99] transition-all duration-300 reach-glow"
              >
                Start Your Project
              </Link>
              <Link
                to="/training"
                className="inline-flex items-center justify-center rounded-full border border-[#0049ad] text-[#0049ad] px-8 py-3 font-semibold hover:bg-[#eef7ff] transition-colors"
              >
                Explore Training
              </Link>
            </div>
          </div>

          <div className="anim-fade-right anim-delay-2">
            <img src={heroImg} alt="Nithminds digital solutions" className="w-full max-w-[650px] mx-auto" />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9ff] py-16 reveal">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[90px] grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bold text-[36px] lg:text-[44px] mb-6">Why Nithminds</h2>

            <p className="text-[#3b3b3b] leading-[1.8] text-[16px] sm:text-[18px]">
              We combine engineering execution with practical learning programs to help teams deliver faster and stay future-ready.
            </p>

            <div className="mt-8 space-y-6">
              {[
                "Business-first solution design",
                "Experienced mentors and trainers",
                "End-to-end delivery and support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-green-500">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <p className="text-[18px] sm:text-[20px] font-medium text-[#002548]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <img src={whyImg1} alt="Nithminds team collaboration" className="rounded-2xl" />
            <img src={whyImg2} alt="Nithminds project discussion" className="rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white reveal">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[90px]">
          <h2 className="text-center font-extrabold text-[36px] lg:text-[44px] mb-14">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#dceeff] bg-[#f8fcff] p-7 hover:shadow-lg transition-shadow"
              >
                <img src={service.img} alt={service.title} className="w-16 h-16 mb-5" />
                <h3 className="font-bold text-[22px] mb-3">{service.title}</h3>
                <p className="text-[#3b3b3b] text-[16px] leading-[1.7] mb-5">{service.desc}</p>
                <Link
                  to={service.link}
                  className="text-[#0049ad] font-semibold hover:text-[#002548] transition-colors"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9ff] py-16 reveal">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[90px]">
          <h2 className="text-center font-extrabold text-[36px] lg:text-[44px] mb-4">
            Training Services
          </h2>
          <p className="text-center max-w-[900px] mx-auto text-[#3b3b3b] text-[16px] sm:text-[18px] leading-[1.8] mb-12">
            We provide corporate, college, and individual training programs with practical labs, real projects, and placement-focused mentoring.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Cloud and DevOps",
              "Web and Mobile Development",
              "Testing and Automation",
              "Data, AI and Analytics",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 border border-[#dceeff]">
                <p className="font-semibold text-[20px] text-[#0049ad] mb-2">{item}</p>
                <p className="text-[#4d4d4d] text-[15px] leading-[1.7]">
                  Structured curriculum, hands-on assignments, and expert-led sessions.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/training"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0049ad] to-[#21a9f9] text-white px-10 py-3 font-semibold hover:opacity-95 transition-opacity"
            >
              View All Training Programs
            </Link>
          </div>

          <div className="mt-14 bg-white shadow-sm rounded-3xl p-8 border border-[#dceeff]">
            <h2 className="text-center font-extrabold text-[32px] lg:text-[38px] mb-6 text-[#002548]">
              Why Choose Us
            </h2>
            <p className="text-center max-w-[900px] mx-auto text-[#3b3b3b] text-[16px] sm:text-[18px] leading-[1.8] mb-10">
              Organizations choose Nithminds because we combine deep technical capability with execution discipline. Our focus is not only building solutions, but delivering outcomes that improve speed, reliability, and growth.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Business-Aligned Engineering",
                  description:
                    "Every engagement starts with clear business goals, then maps architecture, scope, and milestones to those outcomes.",
                },
                {
                  title: "End-to-End Services Under One Team",
                  description:
                    "From product development to DevOps, cloud, QA, and digital marketing, we reduce coordination overhead and delivery risk.",
                },
                {
                  title: "Training-Backed Delivery Model",
                  description:
                    "We support client teams with upskilling programs so delivery capability and technical maturity continue after project handover.",
                },
                {
                  title: "Quality and Security by Default",
                  description:
                    "We follow strong coding practices, testing standards, and secure implementation patterns to ensure stable production systems.",
                },
                {
                  title: "Scalable for Startups and Enterprises",
                  description:
                    "Our approach adapts to lean startup timelines as well as enterprise-grade governance and integration requirements.",
                },
                {
                  title: "Transparent Collaboration",
                  description:
                    "Clear communication, measurable milestones, and regular reporting keep stakeholders informed and aligned throughout delivery.",
                },
              ].map((item) => (
                <article key={item.title} className="bg-[#f4f9ff] rounded-lg p-6 border border-[#dceeff]">
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[16px] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B4BBE] text-white py-16 reveal">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[90px]">
          <h2 className="text-center text-[36px] lg:text-[44px] font-extrabold mb-12">
            How We Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Discover requirements and goals",
              "Design architecture and roadmap",
              "Develop, test, and deploy",
              "Train teams and provide support",
            ].map((step, idx) => (
              <div key={step} className="bg-white/10 rounded-2xl p-6">
                <p className="text-[14px] tracking-[0.15em] uppercase text-white/70 mb-2">
                  Step {idx + 1}
                </p>
                <p className="text-[20px] font-semibold leading-[1.5]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
