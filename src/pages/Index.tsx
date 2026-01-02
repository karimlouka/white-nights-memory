import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import GallerySection from "@/components/GallerySection";
import MusicPlayer from "@/components/MusicPlayer";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <QuoteSection />
      <MusicPlayer />
      <GallerySection />
      <FooterSection />
    </main>
  );
};

export default Index;
