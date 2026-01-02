import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";
import { motion } from "framer-motion";
import songFile from "@/assets/song.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const START_TIME = 230; // 3:50
  const END_TIME = 270; // 4:30
  const DURATION = END_TIME - START_TIME;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= END_TIME) {
        audio.pause();
        audio.currentTime = START_TIME;
        setIsPlaying(false);
        setProgress(0);
      } else {
        const currentProgress = ((audio.currentTime - START_TIME) / DURATION) * 100;
        setProgress(Math.max(0, Math.min(100, currentProgress)));
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      audio.currentTime = START_TIME;
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      if (audio.currentTime < START_TIME || audio.currentTime >= END_TIME) {
        audio.currentTime = START_TIME;
      }
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Music className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl text-foreground">موسيقى الليالي البيضاء</h3>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              {/* Play Button */}
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-primary-foreground" />
                ) : (
                  <Play className="w-10 h-10 text-primary-foreground ml-1" />
                )}
              </motion.button>

              {/* Progress Bar */}
              <div className="w-full">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground font-body">
                  <span>3:50</span>
                  <span>4:30</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <audio ref={audioRef} src={songFile} preload="metadata" />
    </section>
  );
};

export default MusicPlayer;
