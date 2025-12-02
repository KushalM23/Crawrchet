import FloatingBackground from './components/FloatingBackground';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

// Import images for Project 1
import item1_1 from './assets/images/item1/1.png';
import item1_2 from './assets/images/item1/2.png';
import item1_3 from './assets/images/item1/3.png';
import item1_4 from './assets/images/item1/4.png';
import item1_5 from './assets/images/item1/5.png';
import item1_6 from './assets/images/item1/6.png';
import item1_7 from './assets/images/item1/7.png';
import item1_8 from './assets/images/item1/8.png';
import item1_9 from './assets/images/item1/9.png';

// Import images for Project 2
import item2_1 from './assets/images/item2/1.png';
import item2_2 from './assets/images/item2/2.png';
import item2_3 from './assets/images/item2/3.png';
import item2_4 from './assets/images/item2/4.png';
import item2_5 from './assets/images/item2/5.png';
import item2_6 from './assets/images/item2/6.png';
import item2_7 from './assets/images/item2/7.png';
import item2_8 from './assets/images/item2/8.png';
import item2_9 from './assets/images/item2/9.png';

const item1Images = [item1_2, item1_3, item1_4, item1_5, item1_6, item1_7, item1_8, item1_9];
const item2Images = [item2_2, item2_3, item2_4, item2_5, item2_6, item2_7, item2_8, item2_9];

const projects = [
  {
    id: 1,
    title: "Cute Octopuss",
    details: "A warm, oversized cardigan made with merino wool. Perfect for chilly autumn evenings.",
    materials: "100% Merino Wool",
    time: "25 Hours",
    price: "₹999",
    mainImage: item1_1,
    gridImages: item1Images,
    position: "bottom-right"
  },
  {
    id: 2,
    title: "Blue Beanie",
    details: "A cute, hand-stitched teddy bear with a red bowtie. Safe for kids and extremely huggable.",
    materials: "Cotton Yarn, Polyfill",
    time: "32 Hours",
    price: "₹799",
    mainImage: item2_1,
    gridImages: item2Images,
    position: "top-left"
  },
];

function App() {
  return (
    <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <FloatingBackground />
      
      <HeroSection />
      
      {projects.map((project) => (
        <ProjectSection 
          key={project.id} 
          project={project} 
          position={project.position} 
        />
      ))}
      
      <ContactSection />
    </main>
  );
}

export default App;
