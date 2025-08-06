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
      "Healthcare Professionals",
      "Healthcare Workers", 
      "Medical Professionals",
      "Healthcare Heroes",
      "Healthcare Team"
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
        <div className="flex gap-6 py-8 lg:py-16 items-center justify-center flex-col">
          {/* Animated Headline */}
          <div className="flex gap-3 flex-col">
            <h1 className="text-4xl md:text-6xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-primary">Mental Health Support for</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-2 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-primary"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center">
              By Healthcare Professionals, For Healthcare Professionals
            </p>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            We cannot undo the trauma. But we can choose to become part of the healing. Not by erasing the pain but by bearing witness to it,tending to its roots,and building systems where it doesn't have to repeat.

            </p>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center items-center mt-4">
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