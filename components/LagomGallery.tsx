
const galleryImages = [
  "/events/healing-circle/IMG-20250918-WA0001.jpg",
  "/events/healing-circle/IMG-20250918-WA0002.jpg",
  "/events/healing-circle/IMG-20250918-WA0003.jpg",
  "/events/healing-circle/IMG-20250918-WA0004.jpg",
  "/events/healing-circle/IMG-20250918-WA0005.jpg",
  "/events/healing-circle/IMG-20250918-WA0006.jpg",
  "/events/healing-circle/IMG-20250918-WA0007.jpg",
  "/events/healing-circle/IMG-20250918-WA0008.jpg",
  "/events/healing-circle/IMG-20250918-WA0009.jpg",
  "/events/healing-circle/IMG-20250918-WA0010.jpg",
  "/events/healing-circle/IMG-20250918-WA0011.jpg",
  "/events/healing-circle/IMG-20250918-WA0013.jpg",
  "/events/healing-circle/IMG-20250918-WA0014.jpg",
  "/events/healing-circle/IMG-20250918-WA0024.jpg",
  "/events/healing-circle/IMG-20250918-WA0025.jpg",
  "/events/healing-circle/IMG-20250918-WA0026.jpg",
  "/events/healing-circle/IMG-20250918-WA0027.jpg",
  "/events/healing-circle/WhatsApp Image 2025-09-17 at 23.37.10_f017dd66.jpg",
  "/events/healing-circle/WhatsApp Image 2025-09-17 at 23.37.10_faaf7788.jpg",
  "/events/healing-circle/WhatsApp Image 2025-09-17 at 23.37.11_fbcf5ba6.jpg",
];

export function LagomGallery() {
  // Create duplicated array for seamless infinite loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="pt-8 pb-20 bg-[#fffbf5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Lagom Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moments of connection, healing, and community from our events and
            gatherings
          </p>
        </div>

        {/* Animated Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 animate-scroll"
            style={{
              width: `${duplicatedImages.length * 320}px`, // 320px = card width (288px) + gap (24px)
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-96 bg-gray-200 overflow-hidden">
                  <img
                    src={image}
                    alt={`Healing circle moment ${
                      (index % galleryImages.length) + 1
                    }`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${galleryImages.length * 320}px);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
