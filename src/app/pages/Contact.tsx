import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-[#0049ad] to-[#21a9f9] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white text-[48px] lg:text-[70px] mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Montserrat:Medium',sans-serif] font-medium text-white/90 text-[20px] lg:text-[28px] max-w-3xl mx-auto"
          >
            Get in touch with us to discuss your project
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[#dceeff] bg-[#f8fcff] p-6 flex items-center gap-4"
              >
                <div className="bg-[#daf4ff] rounded-full p-3 shrink-0">
                  <Mail className="size-6 text-[#0049ad]" />
                </div>
                <div>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#002548] text-[20px] mb-1">Email</h3>
                  <a href="mailto:hr@nithminds.com" className="font-['Poppins:Regular',sans-serif] text-[#0049ad] text-[16px] hover:underline">
                    hr@nithminds.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-[#dceeff] bg-[#f8fcff] p-6 flex items-center gap-4"
              >
                <div className="bg-[#daf4ff] rounded-full p-3 shrink-0">
                  <Phone className="size-6 text-[#0049ad]" />
                </div>
                <div>
                  <h3 className="font-['Poppins:Bold',sans-serif] text-[#002548] text-[20px] mb-1">Phone</h3>
                  <a href="tel:+919500155377" className="font-['Poppins:Regular',sans-serif] text-[#0049ad] text-[16px] hover:underline">
                    +91-9500155377
                  </a>
                </div>
              </motion.div>
            </div>

            <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[36px] lg:text-[48px]">
              Our Offices
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[#dceeff] bg-[#f8fcff] p-6"
              >
                <h3 className="font-['Poppins:Bold',sans-serif] text-[#002548] text-[20px] mb-2">
                  Chennai Office
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[16px] leading-relaxed whitespace-pre-line">
                  Innov8 Millenia, 2nd Floor, East Wing, RMZ,{"\n"}
                  Millenia Business Park, Campus 1A,{"\n"}
                  No.143, DR.M.G.R. Road,{"\n"}
                  Perungudi, Chennai - 600096
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-[#dceeff] bg-[#f8fcff] p-6"
              >
                <h3 className="font-['Poppins:Bold',sans-serif] text-[#002548] text-[20px] mb-2">
                  Madurai Office
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[16px] leading-relaxed whitespace-pre-line">
                  No 7, Muthu Thevar Colony{"\n"}
                  Virattipattu, Madurai 625016
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
