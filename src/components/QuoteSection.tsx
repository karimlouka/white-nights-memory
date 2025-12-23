import { motion } from "framer-motion";
import bookPages from "@/assets/book-pages.png";

const QuoteSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              {/* Quote mark */}
              <span className="absolute -top-8 -left-4 text-8xl text-muted-foreground/20 font-display">
                "
              </span>
              
              <blockquote className="font-body text-xl md:text-2xl lg:text-3xl text-foreground/90 leading-relaxed italic pl-8">
                But how could I have been so blind, when everything had already been taken by another, 
                when nothing was mine? But I would have loved him and continued to love you so...
              </blockquote>
              
              <footer className="mt-8 pl-8">
                <p className="font-display text-lg text-muted-foreground">
                  — Fyodor Dostoevsky
                </p>
                <p className="font-body text-muted-foreground/70 italic mt-1">
                  White Nights, 1848
                </p>
              </footer>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/20 to-transparent rounded-lg" />
              <img
                src={bookPages}
                alt="Pages from White Nights"
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-2xl"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-mist/20 rounded-lg pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
