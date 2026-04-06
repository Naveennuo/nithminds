const clientLogos = Object.entries(
  import.meta.glob("../../assets/clients/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string);

export function Clients() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-[#0049ad] to-[#21a9f9] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white text-[48px] lg:text-[70px] mb-6">
            Our Clients
          </h1>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium text-white/90 text-[20px] lg:text-[28px] max-w-4xl mx-auto">
            Brands and organizations we are proud to work with.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {clientLogos.map((src, i) => (
              <div
                key={i}
                className="h-28 rounded-xl border border-[#dbe8f8] bg-white p-4 flex items-center justify-center shadow-sm"
              >
                <img
                  src={src}
                  alt={`Client logo ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
