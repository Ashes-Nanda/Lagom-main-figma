import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Instagram Reels data - only showing actual reels
const instagramReels = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/C2cFKX-IDIX/embed",
    title: "Mental Health Tips",
    reelId: "C2cFKX-IDIX",
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/reel/CgMhuqygchw/embed",
    title: "Healthcare Worker Support",
    reelId: "CgMhuqygchw",
  },
  {
    id: 3,
    embedUrl: "https://www.instagram.com/reel/C0HBg5iIF4e/embed",
    title: "Wellness Journey",
    reelId: "C0HBg5iIF4e",
  },
  {
    id: 4,
    embedUrl: "https://www.instagram.com/reel/DJobC2RRLgK/embed",
    title: "Community Stories",
    reelId: "DJobC2RRLgK",
  },
  {
    id: 5,
    embedUrl: "https://www.instagram.com/reel/DLCVnYjRQP8/embed",
    title: "Inspiration Daily",
    reelId: "DLCVnYjRQP8",
  },
  {
    id: 6,
    embedUrl: "https://www.instagram.com/reel/DAWDE6gyfkz/embed",
    title: "Self Care Tips",
    reelId: "DAWDE6gyfkz",
  },
  {
    id: 7,
    embedUrl: "https://www.instagram.com/reel/DKen7JWN08L/embed",
    title: "Mental Wellness",
    reelId: "DKen7JWN08L",
  },
];

export function InstagramGallery() {
  const [expandedReel, setExpandedReel] = useState<number | null>(null);

  const handleReelClick = (reelId: string, id: number) => {
    // Toggle expanded state for inline playback
    setExpandedReel(expandedReel === id ? null : id);
  };

  const handlePlayButtonClick = (
    e: React.MouseEvent,
    reelId: string,
    id: number
  ) => {
    e.stopPropagation(); // Prevent card click
    setExpandedReel(expandedReel === id ? null : id);
  };

  return (
    <section className="py-16 bg-[#FFFBF5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Lagom Gallery
            </h2>
            <p className="text-xl text-muted-foreground">
              Follow our journey and get inspired by our community stories
            </p>
          </div>

          {/* Carousel layout */}
          <div className="relative mb-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {instagramReels.map((reel) => (
                  <CarouselItem
                    key={reel.id}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => handleReelClick(reel.reelId, reel.id)}
                    >
                      <div className="aspect-[3/4] relative">
                        {expandedReel === reel.id ? (
                          <iframe
                            src={reel.embedUrl}
                            className="w-full h-full"
                            style={{ border: "none" }}
                            allow="encrypted-media"
                            loading="lazy"
                            title={reel.title}
                          />
                        ) : (
                          <>
                            <iframe
                              src={reel.embedUrl}
                              className="w-full h-full pointer-events-none"
                              style={{ border: "none" }}
                              allow="encrypted-media"
                              loading="lazy"
                              title={reel.title}
                            />
                            {/* Play overlay for visual feedback */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                              <button
                                onClick={(e) =>
                                  handlePlayButtonClick(e, reel.reelId, reel.id)
                                }
                                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                              >
                                <svg
                                  className="w-8 h-8 text-gray-800 ml-1"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation buttons */}
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 w-12 h-12" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 w-12 h-12" />
            </Carousel>
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/being.lagom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
              </svg>
              Follow @being.lagom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
