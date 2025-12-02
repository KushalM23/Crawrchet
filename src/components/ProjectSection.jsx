import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const positionMap = {
  'top-left': 0,
  'top-center': 1,
  'top-right': 2,
  'center-left': 3,
  'center-center': 4,
  'center-right': 5,
  'bottom-left': 6,
  'bottom-center': 7,
  'bottom-right': 8,
};

const ProjectSection = ({ project, position = 'bottom-right' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ignoreCardHover, setIgnoreCardHover] = useState(false);
  const gridIndex = positionMap[position];

  // Generate grid items: 8 images + 1 info card
  const gridItems = Array(9).fill(null).map((_, index) => {
    if (index === gridIndex) return { type: 'card' };
    const imageIndex = index < gridIndex ? index : index - 1;
    return { type: 'image', src: project.gridImages[imageIndex] };
  });

  const handleCardEnter = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <section className="relative h-screen w-screen snap-start overflow-hidden bg-crawrchet-bg">
      {/* Main Background - Completely Visible */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay when Expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm"
            // Removed onMouseEnter to prevent closing when hovering background
          />
        )}
      </AnimatePresence>

      {/* Grid Container */}
      <motion.div 
        className="absolute inset-0 z-20 grid grid-cols-3 grid-rows-3 w-full h-full pointer-events-none gap-2 md:gap-4 p-2 md:p-12"
      >
        {gridItems.map((item, index) => (
          <div 
            key={index} 
            className={clsx(
              "relative w-full h-full flex",
              // Align content based on position in grid
              index % 3 === 0 ? "justify-start" : index % 3 === 1 ? "justify-center" : "justify-end",
              index < 3 ? "items-start" : index < 6 ? "items-center" : "items-end"
            )}
          >
            {/* Grid Images */}
            {item.type === 'image' && (
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05, zIndex: 30 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-lg overflow-hidden shadow-lg pointer-events-auto cursor-pointer"
                    // Removed onMouseEnter to prevent re-triggering open logic
                  >
                    <img src={item.src} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {/* Card */}
            {item.type === 'card' && (
              <motion.div
                layout
                className={clsx(
                  "bg-white/90 backdrop-blur-sm rounded-xl shadow-xl cursor-pointer border border-crawrchet-neutral",
                  "flex flex-col justify-center items-center text-center pointer-events-auto transition-all duration-300 ease-in-out",
                  isExpanded ? "w-full h-full p-4 md:p-6" : "w-40 h-28 md:w-64 md:h-40 p-4 hover:scale-105"
                )}
                onMouseEnter={handleCardEnter}
                onClick={handleCardEnter}
              >
                <motion.h3 
                  layout="position"
                  className={clsx(
                    "font-bold font-serif text-crawrchet-text transition-all duration-300",
                    isExpanded ? "text-xl md:text-2xl mb-2" : "text-base md:text-xl"
                  )}
                >
                  {project.title}
                </motion.h3>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden w-full"
                    >
                      <div className="h-px w-12 bg-crawrchet-accent-pink my-3 mx-auto"></div>
                      <p className="text-sm font-semibold text-crawrchet-text/80">Time: <span className="font-normal">{project.time}</span></p>
                      {project.price && (
                        <p className="text-sm font-semibold text-crawrchet-text/80">Price: <span className="font-normal">{project.price}</span></p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
