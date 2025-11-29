import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import pong from '../../assets/pong.webp'
import happy from '../../assets/Happiness.png'
import travel from '../../assets/travpart.png'
import jewel from '../../assets/jewel.png'
import omega from '../../assets/Omega.png'
import shoe from '../../assets/shoe.png'

const Works = () => {
  const projects = [
    {
      title: "Neon Pong",
      category: "Game Dev",
      image: pong,
      href: "https://drive.google.com/file/d/1XomFcE76Y3LHjOn9kEVUy7if0q91UoOQ/view?usp=sharing"
    },
    {
      title: "Travpart",
      category: "Landing Page",
      image: travel,
      href: "https://travpart-prototype.vercel.app/"
    },
    {
      title: "Happiness Index",
      category: "Website",
      image: happy,
      href: "https://happiness-index.netlify.app/"
    },
    {
      title: "Jewellary Store",
      category: "Website",
      image: jewel,
      href: "https://jewellery-store-prototype.vercel.app/"
    },
     {
      title: "Project Omega",
      category: "Game Dev",
      image: omega,
      href: "https://drive.google.com/file/d/1-0z2vUgGyvNdriJm6r6n2JzDQBDGfTvd/view?usp=sharing "
    },
    {
      title: "Sneaker Store",
      category: "Landing Page",
      image: shoe,
      href: "https://sneaker-store-prototype.vercel.app/"
    }
  ];

  return (
    <section id="works" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Our <span className="text-red-600">Works</span></h2>
                <p className="text-gray-400">A glimpse into our creative universe.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Wrapper = project.href ? "a" : "div"; // conditional wrapper
            return (
              <Wrapper
                key={index}
                href={project.href}
                target={project.href && "_blank"}
                rel={project.href && "noopener noreferrer"}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-red-500 text-sm font-bold uppercase tracking-wider mb-1">{project.category}</span>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </motion.div>
              </Wrapper>
            );
          })}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-red-500 font-bold">See all projects</a>
        </div>
      </div>
    </section>
  );
};

export default Works;
