import { motion } from 'framer-motion';
import { Scissors, CircleDashed, PenTool } from 'lucide-react';

const FloatingIcon = ({ Icon, initialX, initialY, duration, delay }) => {
  return (
    <motion.div
      className="absolute text-crawrchet-accent-pink/20 pointer-events-none z-0"
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{
        x: [initialX, initialX + 100, initialX - 50, initialX],
        y: [initialY, initialY - 100, initialY + 50, initialY],
        rotate: [0, 180, 360],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      <Icon size={48} />
    </motion.div>
  );
};

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <FloatingIcon Icon={Scissors} initialX={100} initialY={100} duration={20} delay={0} />
      <FloatingIcon Icon={CircleDashed} initialX={window.innerWidth - 200} initialY={200} duration={25} delay={2} />
      <FloatingIcon Icon={PenTool} initialX={300} initialY={window.innerHeight - 200} duration={22} delay={5} />
      <FloatingIcon Icon={CircleDashed} initialX={window.innerWidth / 2} initialY={window.innerHeight / 2} duration={30} delay={1} />
      <FloatingIcon Icon={Scissors} initialX={window.innerWidth - 100} initialY={window.innerHeight - 100} duration={28} delay={4} />
    </div>
  );
};

export default FloatingBackground;
