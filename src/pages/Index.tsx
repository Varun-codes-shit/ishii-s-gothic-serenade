import { motion } from "framer-motion";
import gothBg from "@/assets/goth-bg.jpg";
import gothCake from "@/assets/goth-cake.jpg";
import gothSlide1 from "@/assets/goth-slide1.jpg";
import gothSlide2 from "@/assets/goth-slide2.jpg";
import gothSlide3 from "@/assets/goth-slide3.jpg";
import ishii from "@/assets/ishii.png";
import GothSlider from "@/components/GothSlider";
import InterestCard from "@/components/InterestCard";

const slides = [
  {
    image: gothSlide1,
    subtitle: "March 6th, 2026",
    title: "Happy Birthday",
    topic: "Ishii-san ♱",
    description:
      "Another year of being unapologetically you — the goth queen, the one who vibes to Salvatore on repeat and knows that fame really is a gun.",
  },
  {
    image: gothSlide2,
    subtitle: "The Dark Aesthetic",
    title: "14",
    topic: "Years of Being Elite",
    description:
      "Your music taste and aesthetic are already way too elite. Not many people can pull it off like that. Honestly respect the whole vibe.",
  },
  {
    image: gothCake,
    subtitle: "A Cake As Dark As Your Soul",
    title: "Make a Wish",
    topic: "Blow the candles ✦",
    description:
      "Every year deserves a cake that matches the aesthetic. Dark frosting, crimson roses — because basic was never your thing.",
  },
  {
    image: gothSlide3,
    subtitle: "stay toxic 🤭",
    title: "Keep Vibing",
    topic: "Forever & Always",
    description:
      "Here's to another year of grinding on Roblox, discovering bangers at 2am, and staying wonderfully toxic.",
  },
];

const interests = [
  { emoji: "🖤", title: "Goth", description: "The dark aesthetic hits different — shadows, silence, and all things beautifully eerie." },
  { emoji: "📺", title: "TV Girl", description: "Elite music taste, no debate. The kind of songs you put on repeat at 2am." },
  { emoji: "🌹", title: "Salvatore", description: "A vibe, a mood, a whole aesthetic in one song." },
  { emoji: "🔫", title: "Fame Is A Gun", description: "Sharp, unapologetic, and always hitting different." },
  { emoji: "🎮", title: "Roblox", description: "Building worlds, breaking rules — the digital playground of a creative mind." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Full-screen Slider Hero */}
      <GothSlider slides={slides} />

      {/* Interests Section */}
      <section className="relative py-24 px-6 goth-gradient">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-gothic-display text-3xl sm:text-4xl text-center text-primary text-glow-soft mb-16"
          >
            The Things That Make You, You 🖤
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
            <div className="bg-card border border-border rounded-lg p-8 sm:p-12 text-left space-y-5">
              <p className="font-gothic-body text-foreground text-lg leading-relaxed italic">
                Yo Ishii-san,
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed">
                Happy 14th birthday! 🖤 Another year of being unapologetically you — 
                the goth queen, the TV Girl listener, the one who vibes to Salvatore on repeat 
                and knows that fame really is a gun.
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed">
                You're two years younger than me but your music taste and aesthetic are already way too elite. 
                Honestly respect the whole vibe you've got going on — not many people can pull it off like that.
              </p>
              <p className="font-gothic-body text-foreground text-lg leading-relaxed">
                Here's to another year of grinding on Roblox, 
                discovering bangers that hit different at 2am, and staying wonderfully toxic. 🤭
              </p>
              <p className="font-gothic-body text-primary text-xl leading-relaxed mt-8 text-center text-glow-soft">
                Keep being cool. Happy bday homie ♱
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
            Made with 🖤 for Ishii-san
          </p>
          <p className="font-gothic-blackletter text-primary text-glow text-3xl mt-4">
            ♱ 2026 ♱
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
