import { motion } from "framer-motion";
import lionSlide1 from "@/assets/lion-slide1.jpg";
import lionSlide2 from "@/assets/lion-slide2.jpg";
import lionSlide3 from "@/assets/lion-slide3.jpg";
import lionCake from "@/assets/lion-cake.jpg";
import GothSlider from "@/components/GothSlider";
import InterestCard from "@/components/InterestCard";
import CursorGlow from "@/components/CursorGlow";

const slides = [
  {
    image: lionSlide1,
    subtitle: "March 14th, 2026",
    title: "Happy Birthday",
    topic: "Anmol Bakra 🦁",
    description:
      "Bro really made it to 17 without gaining a single kg. Respect the consistency honestly.",
  },
  {
    image: lionSlide2,
    subtitle: "The 'Lion King'",
    title: "17",
    topic: "Years of Being Skinny",
    description:
      "17 years on this earth and still built like a matchstick. The lion pfp is doing all the heavy lifting fr.",
  },
  {
    image: lionCake,
    subtitle: "Don't Blow Too Hard",
    title: "Make a Wish",
    topic: "You might fly away 💨",
    description:
      "Wish for some mass maybe?? Golden cake for the golden boy — just don't let the candles outweigh you.",
  },
  {
    image: lionSlide3,
    subtitle: "stay delusional king 🦁",
    title: "Keep Grinding",
    topic: "Forever Skinny & Always",
    description:
      "Another year of 'I'm bulking bro' while looking exactly the same. The lion inside you is starving.",
  },
];

const interests = [
  { emoji: "🦁", title: "Lions", description: "Has a lion wallpaper, lion pfp, lion hoodie... bro thinks he IS the lion. Spoiler: you're the gazelle." },
  { emoji: "🏸", title: "Badminton", description: "The only sport where being 40kg is actually an advantage. Wind can't push what barely exists." },
  { emoji: "💪", title: "Abs Training", description: "Abs visible because there's literally zero body fat. That's not a six-pack, that's just your ribcage bro." },
  { emoji: "🦴", title: "Skinny Legend", description: "Built like a QR code — flat from every angle. One strong breeze and you're in the next city." },
  { emoji: "👑", title: "Self-Proclaimed King", description: "Walks around with main character energy but has NPC body mass. The crown is heavier than him." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative cursor-none sm:cursor-none">
      <CursorGlow />

      {/* Full-screen Slider Hero */}
      <GothSlider slides={slides} />

      {/* Interests Section */}
      <section className="relative py-28 px-6 lion-gradient overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-gothic-body text-muted-foreground text-sm tracking-[0.4em] uppercase mb-4">
              a questionable personality breakdown
            </p>
            <h2 className="font-gothic-display text-3xl sm:text-4xl text-primary text-glow-soft">
              The Things That "Define" You 🦁
            </h2>
            <div className="w-24 h-[2px] bg-primary/40 mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {interests.map((interest, i) => (
              <InterestCard key={interest.title} {...interest} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--lion-deep))_0%,transparent_70%)]" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-gothic-body text-muted-foreground text-sm tracking-[0.4em] uppercase mb-4">
              okay real talk for a sec
            </p>
            <h2 className="font-gothic-blackletter text-4xl sm:text-5xl text-primary text-glow mb-12">
              A Letter For You
            </h2>
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 sm:p-12 text-left space-y-6 relative overflow-hidden shadow-[0_0_80px_-20px_hsl(var(--primary)/0.15)]">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
              <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              
              <p className="font-gothic-body text-foreground text-lg leading-relaxed italic relative z-10">
                Dear Anmol (the human twig),
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed relative z-10">
                Happy 17th birthday! 🦁 Can't believe you survived another year 
                without getting knocked over by the wind. Your lion obsession is 
                genuinely concerning at this point — bro has a lion screensaver, 
                lion quotes in bio, and probably roars in the mirror. You ARE the meme.
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed relative z-10">
                The badminton grind is real though, I'll give you that. You move 
                on that court like your life depends on it — probably because your 
                body weight allows you to float. And the abs?? Bro your abs are 
                visible because there's nothing else there. That's not training, 
                that's just anatomy. 💀
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed relative z-10">
                But fr fr — you're one of the realest ones out here. Skinny, 
                delusional, lion-obsessed, and somehow still the most confident 
                person in the room. Never change (except maybe eat something).
              </p>
              
              <div className="w-16 h-[1px] bg-primary/30 mx-auto my-4" />
              
              <p className="font-gothic-body text-primary text-xl leading-relaxed text-center text-glow-soft relative z-10">
                Stay skinny, stay delusional, stay king. 👑🦁
              </p>
              <p className="font-gothic-body text-muted-foreground text-sm text-center italic relative z-10">
                — from someone who actually eats
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.05)_0%,transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <p className="font-gothic-display text-muted-foreground text-sm tracking-[0.3em] uppercase">
            Made with 🦁 for the skinniest king alive
          </p>
          <p className="font-gothic-blackletter text-primary text-glow text-3xl mt-4">
            👑 2026 👑
          </p>
          <p className="font-gothic-body text-muted-foreground/50 text-xs mt-3 italic">
            (please eat something)
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
