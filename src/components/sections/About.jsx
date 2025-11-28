import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-red-600 rounded-xl blur-lg opacity-30"></div>
                            <div className="relative bg-gray-800 p-2 rounded-xl border border-gray-700">
                                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"  alt="Team working" className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500 w-full" />
                            </div>
                        </div>  
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Just Freelancers, <br/><span className="text-red-600">Digital Architects</span>.</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                           Mugen Media was founded on the principle of “Mugen” (Infinite). We believe there are no limits to what can be achieved with the right code and design. What began as a passion project grew into a collaborative space where we work side by side with clients, learning their story and shaping solutions that feel authentic, crafted with intention, not templates.
                        </p>

                        
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
                                <p className="text-red-500 text-sm uppercase tracking-wider">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">99%</h4>
                                <p className="text-red-500 text-sm uppercase tracking-wider">Client Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About;
