import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RollingAnimationProps {
  words?: string[];
  interval?: number;
  className?: string;
}

function RollingAnimation({
  words = [
    "Humour",
    "Friendship",
    "Games",
    "Breath",
    "Rage",
    "Love",
    "Satire",
    "Memes",
  ],
  interval = 2000,
  className = "",
}: RollingAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      if (elements.length > currentIndex) {
        const newWidth = elements[currentIndex].getBoundingClientRect().width;
        setWidth(`${newWidth}px`);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants = {
    hidden: {
      y: -30,
      opacity: 0,
      rotateX: -90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      y: 30,
      opacity: 0,
      rotateX: 90,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary"
          >
            {word}
          </span>
        ))}
      </div>

      <motion.div
        className="relative inline-block overflow-hidden"
        animate={{
          width,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 1,
          },
        }}
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className="inline-block text-xl md:text-2xl lg:text-3xl font-semibold text-primary"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              whiteSpace: "nowrap",
              transformStyle: "preserve-3d",
            }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary ml-1">
        is Medicine
      </span>
    </div>
  );
}

export { RollingAnimation };
