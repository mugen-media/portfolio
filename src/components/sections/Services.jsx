import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Gamepad2, Rocket, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Layout size={40} />,
      title: "Website Building",
      desc: "Custom, responsive websites designed to convert visitors into loyal clients. Built with the latest tech stacks.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Smartphone size={40} />,
      title: "Landing Pages",
      desc: "High-impact landing pages optimized for marketing campaigns and lead generation.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Gamepad2 size={40} />,
      title: "Game Development",
      desc: "Immersive 2D and 3D gaming experiences for mobile and web platforms using Unity and WebGL.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <Rocket size={40} />,
      title: "Software Solutions",
      desc: "Tailor-made software to streamline your business operations and solve complex problems.",
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="text-red-600">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We provide a comprehensive suite of digital services designed to elevate your brand.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 border border-gray-800 p-8 rounded-2xl group hover:border-red-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
              
              <div className="mb-6 text-gray-300 group-hover:text-red-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#contact" className="flex items-center text-red-500 text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                Learn More <ChevronRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
