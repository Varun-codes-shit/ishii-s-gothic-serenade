import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  topic: string;
  description: string;
}

interface GothSliderProps {
  slides: Slide[];
}

const GothSlider = ({ slides }: GothSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const goNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, slides.length]);

  const goPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, slides.length]);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setDirection(index > current ? "next" : "prev");
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating, current]
  );

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [goNext]);

  const slideVariants = {
    enter: (dir: "next" | "prev") => ({
      opacity: 0,
      scale: dir === "next" ? 1.1 : 0.9,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: (dir: "next" | "prev") => ({
      opacity: 0,
      scale: dir === "next" ? 0.9 : 1.1,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: delay * 0.15 + 0.3, ease: "easeOut" as const },
    }),
    exit: { opacity: 0, y: -50, filter: "blur(10px)", transition: { duration: 0.3 } },
  };

  const slide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 z-50">
        <motion.div
          key={current}
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
        />
      </div>

      {/* Main slide image */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
          <div className="absolute inset-0 lion-vignette" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-[80%] mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div key={current} className="max-w-2xl">
              <motion.p
                custom={0}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-gothic-body text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3"
              >
                {slide.subtitle}
              </motion.p>

              <motion.h1
                custom={1}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-gothic-blackletter text-5xl sm:text-7xl md:text-8xl text-primary text-glow mb-2 leading-none"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                custom={2}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-gothic-display text-2xl sm:text-3xl text-foreground mb-4"
              >
                {slide.topic}
              </motion.p>

              <motion.p
                custom={3}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-gothic-body text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl italic"
              >
                {slide.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((s, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-20 h-28 sm:w-24 sm:h-36 rounded-md overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
              i === current
                ? "border-primary animate-pulse-glow"
                : "border-border opacity-60 hover:opacity-90"
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2">
              <p className="font-gothic-display text-foreground text-[10px] sm:text-xs truncate">
                {s.title}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-[80%] right-[52%] z-30 flex gap-3">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))" }}
          whileTap={{ scale: 0.9 }}
          onClick={goPrev}
          disabled={isAnimating}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary-foreground transition-colors cursor-pointer disabled:opacity-50"
          aria-label="Previous slide"
        >
          <span className="font-bold text-lg">‹</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))" }}
          whileTap={{ scale: 0.9 }}
          onClick={goNext}
          disabled={isAnimating}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary-foreground transition-colors cursor-pointer disabled:opacity-50"
          aria-label="Next slide"
        >
          <span className="font-bold text-lg">›</span>
        </motion.button>
      </div>
    </div>
  );
};

export default GothSlider;
