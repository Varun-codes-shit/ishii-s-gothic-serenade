import { motion } from "framer-motion";

interface InterestCardProps {
  emoji: string;
  title: string;
  description: string;
  delay: number;
}

const InterestCard = ({ emoji, title, description, delay }: InterestCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ 
      scale: 1.04, 
      y: -8,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }}
    className="group bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-7 text-center cursor-default relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)] hover:border-primary/30"
  >
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500 rounded-2xl" />
    
    {/* Glow dot top-right */}
    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
    
    <div className="relative z-10">
      <motion.span 
        className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300"
      >
        {emoji}
      </motion.span>
      <h3 className="font-gothic-display text-primary text-base mb-2 tracking-wide">{title}</h3>
      <p className="font-gothic-body text-muted-foreground text-sm italic leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default InterestCard;
