import { motion } from "framer-motion";
import lionSlide1 from "@/assets/lion-slide1.jpg";
import lionSlide2 from "@/assets/lion-slide2.jpg";
import lionSlide3 from "@/assets/lion-slide3.jpg";
import lionCake from "@/assets/lion-cake.jpg";
import GothSlider from "@/components/GothSlider";
import InterestCard from "@/components/InterestCard";
import RosePetals from "@/components/RosePetals";

const slides = [
  {
    image: lionSlide1,
    subtitle: "March 14th, 2026",
    title: "Happy Birthday",
    topic: "Anmol Bakra 🦁",
    description:
      "Another year of being the absolute king — the lion-hearted one, the badminton beast, the guy who never stops grinding.",
  },
  {
    image: lionSlide2,
    subtitle: "The Lion King",
    title: "17",
    topic: "Years of Being a Legend",
    description:
      "Turning 17 and already built different. The lion energy is unmatched — you walk into a room and own it.",
  },
  {
    image: lionCake,
    subtitle: "A Cake Fit For A King",
    title: "Make a Wish",
    topic: "Blow the candles 👑",
    description:
      "Every king deserves a golden cake. Crown on top, candles blazing — because you were born to stand out.",
  },
  {
    image: lionSlide3,
    subtitle: "keep roaring 🦁",
    title: "Keep Grinding",
    topic: "Forever & Always",
    description:
      "Here's to another year of smashing shuttlecocks, chasing abs, and being the skinniest lion in the jungle. 💪",
  },
];

const interests = [
  { emoji: "🦁", title: "Lions", description: "Obsessed with the king of the jungle — the mane, the roar, the whole alpha energy." },
  { emoji: "🏸", title: "Badminton", description: "Smashing it on the court like a pro. The racket doesn't lie." },
  { emoji: "💪", title: "Abs Training", description: "Always grinding for that six-pack. The discipline of a true warrior." },
  { emoji: "🦴", title: "Skinny King", description: "Built like a cheetah — lean, fast, and dangerously underestimated." },
  { emoji: "👑", title: "Born Leader", description: "Lions don't lose sleep over the opinions of sheep. Crown stays on." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <RosePetals />

      {/* Full-screen Slider Hero */}
      <GothSlider slides={slides} />

      {/* Interests Section */}
      <section className="relative py-24 px-6 lion-gradient">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-gothic-display text-3xl sm:text-4xl text-center text-primary text-glow-soft mb-16"
          >
            The Things That Make You, You 🦁
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, i) => (
              <InterestCard key={interest.title} {...interest} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-gothic-blackletter text-4xl sm:text-5xl text-primary text-glow mb-10">
              A Letter For You
            </h2>
            <div className="bg-card border border-border rounded-lg p-8 sm:p-12 text-left space-y-5 relative overflow-hidden">
              {/* Decorative corner glows */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              
              <p className="font-gothic-body text-foreground text-lg leading-relaxed italic">
                Yo Anmol,
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed">
                Happy 17th birthday! 🦁 Another year of being the absolute king — 
                the lion enthusiast, the badminton beast, the guy who's always chasing 
                that six-pack even though you're built like a stick. 😭
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed">
                Real talk though — your lion obsession is elite. Not everyone has that 
                kind of energy. You walk around with main character vibes and honestly, 
                respect the grind. The abs are coming bro, trust the process. 💪
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed">
                Here's to another year of smashing it on the badminton court, 
                doing crunches at 2am, and being the skinniest lion the world has ever seen. 
                You're literally built different (just... not built yet 🤣).
              </p>
              <p className="font-gothic-body text-primary text-xl leading-relaxed mt-8 text-center text-glow-soft">
                Keep roaring king. Happy bday legend 👑🦁
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-gothic-display text-muted-foreground text-sm tracking-[0.3em] uppercase">
            Made with 🦁 for Anmol Bakra
          </p>
          <p className="font-gothic-blackletter text-primary text-glow text-3xl mt-4">
            👑 2026 👑
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
