import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { Link } from "react-router-dom";

// Prefetch AboutPage on hover/focus
const prefetchAboutPage = () => import("../../pages/AboutPage");

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      { text: "Healthcare Workers", lang: "en", font: "font-sans" }, // English
      { text: "医疗保健专家", lang: "zh", font: "font-chinese" }, // Chinese
      { text: "स्वास्थ्य कर्मचारी", lang: "hi", font: "font-hindi" }, // Hindi (India)
      { text: "આરોગ્ય કર્મચારીઓ", lang: "gu", font: "font-gujarati" }, // Gujarati
      { text: "የጤና ባለሞያዎች", lang: "am", font: "font-amharic" }, // Amharic
      { text: "Trabajadores de la Salud", lang: "es", font: "font-sans" }, // Spanish (Spain)
      { text: "Pekerja Penjagaan Kesihatan", lang: "ms", font: "font-sans" }, // Malay (Singapore)
      { text: "Mitarbeiter im Gesundheitswesen", lang: "de", font: "font-sans" }, // German (Germany)
      { text: "Profissionais de saúde", lang: "pt-BR", font: "font-sans" }, // Portuguese (Brazil)
      { text: "医療従事者", lang: "ja", font: "font-japanese" }, // Japanese (Japan)
      { text: "Gezondheidswerkers", lang: "nl", font: "font-sans" }, // Dutch (Netherlands)
      { text: "Vårdpersonal", lang: "sv", font: "font-sans" }, // Swedish (Sweden)
      { text: "Travailleurs de la santé", lang: "fr", font: "font-sans" },
      { text: "සෞඛ්‍ය සේවකයින්", lang: "si", font: "font-sans"} 
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-4 py-8 lg:py-16 items-center justify-center flex-col">
          {/* Animated Headline */}
          <div className="flex flex-col">
            <div className="text-4xl md:text-6xl max-w-4xl tracking-tighter text-center font-regular">
              <div className="text-primary mb-0 leading-tight">
                Mental Health Support for
              </div>
              <div className="relative flex justify-center overflow-hidden text-center min-h-[2.2em] md:min-h-[2.4em] items-center -mt-4">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className={`absolute font-semibold text-primary ${title.font} whitespace-nowrap flex items-center justify-center`}
                    lang={title.lang}
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -180 : 180,
                            opacity: 0,
                          }
                    }
                  >
                    {title.text}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Supporting Subheadline */}
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center -mt-2">
              By Healthcare Professionals, For Healthcare Professionals
            </p>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center -mt-1">
              We cannot undo the trauma. But we can choose to become part of the
              healing. Not by erasing the pain but by bearing witness to
              it,tending to its roots,and building systems where it doesn't have
              to repeat.
            </p>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center items-center mt-2">
            <Button
              size="lg"
              className="bg-[#0BB8C6] text-white hover:bg-[#0aa0ad] px-8 py-3 text-base font-semibold w-full sm:w-auto min-w-[180px] shadow-lg border-none"
              asChild
            >
              <Link
                to="/about"
                onMouseEnter={prefetchAboutPage}
                onFocus={prefetchAboutPage}
              >
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
