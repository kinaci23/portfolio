import { motion } from "framer-motion"; // Bunu en üste ekledik
import { HyperText } from "../ui/HyperText";
import { TypingAnimation } from "../ui/TypingAnimation";
import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 relative">
      <div className="flex flex-col items-center text-center z-10 w-full px-4">
        
        {/* Terminal Rozeti */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-neutral-900/40 backdrop-blur-md text-emerald-400 text-lg mb-10 shadow-2xl">
          <span className="text-white font-bold tracking-wide">GÖKTAN ARDA KINACI</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>

        {/* Ana Başlık */}
        <HyperText 
          className="text-5xl md:text-7xl text-white mb-2"
          duration={800}
        >
          SOFTWARE ENGINEER
        </HyperText>

        {/* Alt Başlık */}
        <HyperText 
          className="text-2xl md:text-3xl text-neutral-400 mb-8"
          duration={800}
          delay={500}
        >
          FULL STACK & AI
        </HyperText>

        {/* Açıklama */}
        <div className="max-w-3xl text-neutral-300 text-lg md:text-xl leading-relaxed mb-12 min-h-[80px]">
          <TypingAnimation delay={1200} duration={40}>
            Veritabanı ve backend mimarilerini merkeze alarak, yapay zeka yeteneklerini sistem süreçlerine entegre ediyor; veriyi işleyen ve kullanıcı deneyimiyle tamamlanan ölçeklenebilir çözümler geliştiriyorum.
          </TypingAnimation>
        </div>

        {/* Aksiyon Butonları (Yazı bitince smooth bir şekilde ortaya çıkacak) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9.8, duration: 1, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button
            href="#projeler"
            className="bg-emerald-500 text-neutral-950 hover:bg-emerald-400"
          >
            ./projeleri-incele
          </Button>
          
          <Button
            href="#iletisim"
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          >
            ./iletisim
          </Button>
        </motion.div>

      </div>
    </section>
  );
}