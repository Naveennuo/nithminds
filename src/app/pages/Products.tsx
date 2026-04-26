import { Link } from "react-router-dom";

const products = [
  {
    title: "Blockchain Consulting",
    description:
      "Architecture planning, protocol selection, and roadmap definition for secure and scalable blockchain adoption.",
  },
  {
    title: "Smart Contract Development",
    description:
      "Design and implementation of audited smart contracts for token workflows, marketplaces, and business automation.",
  },
  {
    title: "Enterprise Blockchain Solutions",
    description:
      "Private and consortium blockchain implementations for traceability, compliance, and transparent operations.",
  },
  {
    title: "Blockchain Solutions",
    description:
      "End-to-end blockchain platforms with wallet integration, decentralized workflows, and reliable deployment support.",
  },
  {
    title: "ERP Solutions",
    description:
      "Custom ERP systems that streamline finance, inventory, operations, and reporting across growing business teams.",
  },
  {
    title: "On Demand Services",
    description:
      "Scalable on-demand platforms for bookings, delivery management, user coordination, and real-time service operations.",
  },
];

export function Products() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-[#0049ad] to-[#21a9f9] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white text-[48px] lg:text-[70px] mb-6">
            Products
          </h1>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium text-white/90 text-[20px] lg:text-[28px] max-w-3xl mx-auto">
            Blockchain product offerings from Nithminds
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.title}
                className="bg-[#f8fcff] rounded-xl p-8 border border-[#dceeff] hover:shadow-md transition-shadow"
              >
                <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[24px] mb-3">
                  {product.title}
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[17px] leading-relaxed">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[34px] lg:text-[46px] mb-6">
            Build Your Blockchain Product
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
