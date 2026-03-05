import { useState } from "react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      {playing && (
        <iframe
          className="fixed bottom-20 right-4 z-50 rounded-lg shadow-2xl border border-border"
          style={{ width: "300px", height: "80px" }}
          src="https://open.spotify.com/embed/track/5EBwCPYdMOOpoMSTkBzNkl?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Salvatore - Lana Del Rey"
        />
      )}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setPlaying(!playing)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-muted transition-colors animate-pulse-glow cursor-pointer"
        aria-label={playing ? "Hide music" : "Play music"}
      >
        <span className="text-lg">{playing ? "♫" : "♪"}</span>
      </motion.button>
    </>
  );
};

export default MusicPlayer;
