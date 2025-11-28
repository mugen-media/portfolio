import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, ArrowRight } from 'lucide-react';
import { MugenLogo } from '../ui/MugenLogo';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black opacity-70"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-800/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block border border-red-500/30 bg-red-500/10 rounded-full px-4 py-1 mb-6">
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Digital Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Build Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Digital Empire</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            We are <span className="text-white font-bold">Mugen Media</span>. We create infinite possibilities for your brand through high-end web development, immersive games, and software solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-red-600/20"
            >
              View Our Work <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 hover:border-white text-white px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y1 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="bg-gray-900 aspect-square flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-black opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <MugenLogo className="w-64 h-64 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
             </div>
          </div>
          {/* Floating Element */}
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;