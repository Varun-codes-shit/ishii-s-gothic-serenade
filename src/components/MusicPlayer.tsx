import { useState } from "react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      {playing && (
        <iframe
          className="hidden"
          src="https://www.youtube.com/embed/gMbQMkf5IiU?autoplay=1&loop=1&playlist=gMbQMkf5IiU"
          allow="autoplay"
          title="Salvatore - Lana Del Rey"
        />
      )}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        onClick={() => setPlaying(!playing)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-muted transition-colors animate-pulse-glow cursor-pointer"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span className="text-lg">{playing ? "♫" : "♪"}</span>
      </motion.button>
    </>
  );
};

export default MusicPlayer;
