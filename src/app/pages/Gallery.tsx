const updateImages = Object.entries(
  import.meta.glob("../../assets/gallery/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string);

export function Updates() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0049ad] to-[#21a9f9] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white text-[48px] lg:text-[70px] mb-6">
            Gallery
          </h1>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium text-white/90 text-[20px] lg:text-[28px] max-w-3xl mx-auto">
            Stay updated with our latest news, articles, and announcements
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f7fbff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="mb-10 text-center">
            <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[34px] lg:text-[44px]">
              Training Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {updateImages.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-[#dbe9f7] bg-white shadow-[0_8px_24px_rgba(10,63,130,0.08)] transition-all duration-300 hover:shadow-[0_14px_30px_rgba(10,63,130,0.16)]"
              >
                <img
                  src={image}
                  alt="Training session update"
                  className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
