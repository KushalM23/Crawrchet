import { motion } from 'framer-motion';
import mainImage from '../assets/images/main.png';
import instaIcon from '../assets/elements/insta.png';
import whatsappIcon from '../assets/elements/whatsapp.png';
import phoneIcon from '../assets/elements/phone.png';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: instaIcon,
      label: "Instagram",
      value: "@_ohthatsmi_",
      href: "https://instagram.com/_ohthatsmi_",
      color: "hover:bg-pink-500/10"
    },
    {
      icon: whatsappIcon,
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/6969696969",
      color: "hover:bg-green-500/10"
    },
    {
      icon: phoneIcon,
      label: "Phone",
      value: "+91 69696 69696",
      href: "tel:+91 6969696969",
      color: "hover:bg-blue-500/10"
    }
  ];

  return (
    <section className="relative h-screen w-screen snap-start flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainImage}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center justify-center gap-6 md:gap-12">
        
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 font-serif">Get in Touch</h2>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            Ready to start your custom project? Reach out to us through any of these platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-sm md:max-w-full">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2, delay: 0 }
              }}
              transition={{ duration: 0.2 }}
              className={`flex flex-col items-center justify-center p-4 md:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group ${method.color}`}
            >
              <div className="w-16 h-16 md:w-32 md:h-32 mb-4 md:mb-6 relative">
                 <img 
                   src={method.icon} 
                   alt={method.label} 
                   className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110" 
                 />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-serif">{method.label}</h3>
              <p className="text-white/90 font-medium text-sm md:text-base">{method.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
