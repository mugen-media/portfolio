import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$999",
            features: ["5 Page Website", "Mobile Responsive", "Contact Form", "Basic SEO", "1 Month Support"],
            featured: false
        },
        {
            name: "Professional",
            price: "$2,499",
            features: ["10 Page Website", "CMS Integration", "Advanced Animations", "SEO Optimization", "3 Months Support"],
            featured: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: ["Full Stack Application", "E-commerce", "Custom Game Dev", "Database Integration", "Priority 24/7 Support"],
            featured: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transparent <span className="text-red-600">Pricing</span></h2>
                    <p className="text-gray-400">Choose the plan that fits your ambition.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-2xl border ${plan.featured ? 'bg-black border-red-600 shadow-2xl shadow-red-900/20 scale-105' : 'bg-gray-800 border-gray-700'}`}
                        >
                            {plan.featured && <div className="text-center mb-4"><span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</span></div>}
                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-400 text-sm">
                                        <Check size={16} className="text-red-500 mr-3" /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-lg font-bold transition-all ${plan.featured ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing;