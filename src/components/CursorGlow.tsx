import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-screen"
      animate={{ x: pos.x - 150, y: pos.y - 150 }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,hsl(40_90%_55%/0.15)_0%,transparent_70%)]" />
    </motion.div>
  );
};

export default CursorGlow;
