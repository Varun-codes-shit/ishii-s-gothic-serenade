import { motion } from "framer-motion";
import gothBg from "@/assets/goth-bg.jpg";
import gothCake from "@/assets/goth-cake.jpg";
import InterestCard from "@/components/InterestCard";

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
      <MusicPlayer />
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center goth-gradient">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${gothBg})` }}
        />
        <div className="absolute inset-0 goth-vignette" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p className="font-gothic-body text-muted-foreground text-lg tracking-[0.3em] uppercase mb-4">
              March 6th, 2026
            </p>
            <h1 className="font-gothic-blackletter text-6xl sm:text-8xl md:text-9xl text-primary text-glow mb-6">
              Happy Birthday
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="font-gothic-display text-3xl sm:text-4xl text-foreground mb-2"
            >
              Ishii-san
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.5 }}
              className="mt-6"
            >
              <span className="font-gothic-display text-7xl sm:text-8xl text-primary text-glow animate-flicker inline-block">
                14
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1.5 }}
              className="font-gothic-body text-muted-foreground italic text-xl mt-4 tracking-wide"
            >
              "stay toxic 🤭"
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-12"
          >
            <div className="animate-float text-4xl">↓</div>
          </motion.div>
        </div>
      </section>

      {/* Cake Section */}
      <section className="relative py-24 px-6 goth-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-gothic-display text-3xl sm:text-4xl text-primary text-glow-soft mb-12">
              A Cake As Dark As Your Aesthetic ✦
            </h2>
            <div className="relative inline-block">
              <img
                src={gothCake}
                alt="Gothic birthday cake with dark frosting and crimson roses"
                className="rounded-lg max-w-sm mx-auto shadow-2xl border border-border"
              />
              <div className="absolute inset-0 rounded-lg animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="relative py-24 px-6">
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
      <section className="relative py-24 px-6 goth-gradient">
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
