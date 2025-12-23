import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Closing quote */}
          <blockquote className="font-body text-lg md:text-xl text-muted-foreground italic mb-8">
            "Good Lord, only a moment of bliss? Isn't such a moment sufficient for the whole of a man's life?"
          </blockquote>

          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-mist/40" />
            <Heart className="w-5 h-5 text-mist/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-mist/40" />
          </div>

          {/* Names again */}
          <p className="font-display text-2xl md:text-3xl text-foreground/80 tracking-wide">
            <span className="italic">R</span> & <span className="italic">Y</span>
          </p>

          {/* Date placeholder */}
          <p className="font-body text-sm text-muted-foreground/60 mt-4 tracking-widest uppercase">
            The First Night
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
