import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something <br/> <span className="text-red-600">Extraordinary</span></h2>
            <p className="text-gray-400 mb-12">Ready to start your project? Contact us today and let's turn your vision into reality.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-red-500"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-gray-400">mugenmediaindia@gmail.com</p>
                </div>
              </div>
            <div className="flex items-center gap-4">
  <div className="bg-gray-800 p-4 rounded-lg text-red-500"><Globe size={24} /></div>
  <div>
    <h4 className="font-bold">Socials</h4>
    <a 
      href="https://www.instagram.com/mugenmedia.in?igsh=MTdsb3M1ODgxOGQ1dg==" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-red-500 transition-colors"
    >
      @mugenmedia.in
    </a>
  </div>
</div>
            </div>
          </div>

          <form className="bg-gray-900 p-8 rounded-2xl border border-gray-800" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">Name</label>
              <input type="text" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="John Doe" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">Email</label>
              <input type="email" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">Project Type</label>
              <select className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors">
                <option>Website Development</option>
                <option>Game Development</option>
                <option>Software Solution</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">Message</label>
              <textarea rows="4" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/50">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
