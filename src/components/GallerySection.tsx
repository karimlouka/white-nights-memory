import { motion } from "framer-motion";
import filmScene1 from "@/assets/film-scene-1.png";
import filmPoster from "@/assets/film-poster.png";
import filmScene2 from "@/assets/film-scene-2.png";
import filmScene3 from "@/assets/film-scene-3.png";
import bookCover from "@/assets/book-cover.png";

const images = [
  { src: filmPoster, alt: "White Nights 1959 Film Poster", span: "row-span-2" },
  { src: filmScene1, alt: "Scene from White Nights 1959", span: "" },
  { src: filmScene3, alt: "Nastenka from the film", span: "" },
  { src: filmScene2, alt: "The Dreamer", span: "" },
  { src: bookCover, alt: "White Nights Book Collection", span: "" },
];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            White Nights
          </h2>
          <p className="font-body text-lg text-muted-foreground italic">
            Luchino Visconti's masterpiece, 1959
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-mist/50 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-lg ${image.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                style={image.span ? { height: "100%", minHeight: "320px" } : {}}
              />
              {/* Decorative corner */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-mist/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-mist/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
