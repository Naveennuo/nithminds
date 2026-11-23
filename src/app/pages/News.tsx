import { BadgeCheck } from "lucide-react";

const certificates = [
  {
    title: "GST Certified",
    subtitle: "Goods and Services Tax",
    badge: "GST",
    description:
      "Nithminds Private Limited is GST registered, supporting transparent invoicing and tax-compliant delivery for our clients and partners.",
  },
  {
    title: "MSME Certified",
    subtitle: "Micro, Small & Medium Enterprises",
    badge: "MSME",
    description:
      "Nithminds Private Limited is MSME registered, recognized as a growing enterprise under India’s MSME / Udyam framework.",
  },
];

export function News() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-[#0049ad] to-[#21a9f9] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white text-[48px] lg:text-[70px] mb-6">
            News
          </h1>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium text-white/90 text-[20px] lg:text-[28px] max-w-3xl mx-auto">
            Latest announcements and company certifications
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[80px]">
          <div className="mb-12 text-center">
            <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[34px] lg:text-[44px]">
              Company Certificates
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="rounded-2xl border border-[#dceeff] bg-[#f8fcff] p-3 shadow-sm"
              >
                <div className="rounded-xl border-2 border-[#c9a227] bg-white px-8 py-10 text-center">
                  <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-[#0049ad] to-[#21a9f9] text-white">
                    <BadgeCheck className="size-8" />
                  </div>
                  <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-[#0049ad] text-[18px] tracking-[0.28em]">
                    {certificate.badge}
                  </p>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#002548] text-[28px] mt-3">
                    {certificate.title}
                  </h3>
                  <p className="font-['Poppins:Medium',sans-serif] text-[#0049ad] text-[16px] mt-2">
                    {certificate.subtitle}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[16px] leading-relaxed mt-5">
                    {certificate.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
