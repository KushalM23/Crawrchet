import { motion } from 'framer-motion';
import logo from '../assets/elements/logo.png';
import arrow from '../assets/elements/arrow.png';
import mainImage from '../assets/images/main.png';

const HeroSection = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-screen snap-start flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainImage}
          alt="Crochet Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.img
          src={logo}
          alt="Crawrchet Logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl md:max-w-4xl object-contain -mb-8 md:-mb-12"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-4xl text-crawrchet-bg italic font-serif mt-0"
        >
          Ft. Smirah
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: [0, 10, 0] }}
        whileHover={{ scale: 1.1 }}
        transition={{ 
          opacity: { duration: 1 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        onClick={handleScrollDown}
      >
        <img src={arrow} alt="Scroll Down" className="w-12 h-12 md:w-16 md:h-16 object-contain rotate-90" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
