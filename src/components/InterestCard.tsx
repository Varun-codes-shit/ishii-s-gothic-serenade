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
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-card border border-border rounded-lg p-6 text-center animate-pulse-glow cursor-default"
  >
    <span className="text-4xl block mb-3">{emoji}</span>
    <h3 className="font-gothic-display text-primary text-lg mb-2">{title}</h3>
    <p className="font-gothic-body text-muted-foreground text-sm italic leading-relaxed">{description}</p>
  </motion.div>
);

export default InterestCard;
