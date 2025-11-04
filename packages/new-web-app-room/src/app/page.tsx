'use client';

import { useState, useEffect } from 'react';

export default function AirPodsProPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Active Noise Cancellation",
      description: "Immerse yourself in pure sound with industry-leading noise cancellation that adapts to your environment.",
      icon: "🔇"
    },
    {
      title: "Spatial Audio",
      description: "Experience theater-like sound that surrounds you with dynamic head tracking for an immersive listening experience.",
      icon: "🎵"
    },
    {
      title: "Adaptive Transparency",
      description: "Stay aware of your surroundings while enjoying your music with intelligent transparency that filters noise.",
      icon: "👂"
    },
    {
      title: "All-Day Battery",
      description: "Up to 6 hours of listening time with ANC on, and up to 30 hours total with the charging case.",
      icon: "🔋"
    }
  ];

  const specs = [
    { label: "Chip", value: "Apple H2" },
    { label: "Battery Life", value: "Up to 6 hours" },
    { label: "Case Battery", value: "Up to 30 hours total" },
    { label: "Charging", value: "Lightning, Wireless, MagSafe" },
    { label: "Water Resistance", value: "IPX4" },
    { label: "Weight", value: "5.3g each" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-thin mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            AirPods Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Adaptive Audio. Now playing.
          </p>
          
          {/* Product Image Placeholder */}
          <div className="relative w-80 h-80 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center text-6xl">
              🎧
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Buy Now - $249
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thin text-center mb-16">
            Designed for <span className="text-blue-400">exceptional</span> audio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer ${activeFeature === index ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Detail */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{features[activeFeature].icon}</div>
          <h3 className="text-3xl md:text-4xl font-light mb-6">{features[activeFeature].title}</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{features[activeFeature].description}</p>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thin text-center mb-16">
            Technical Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b border-gray-800">
                <span className="text-gray-400">{spec.label}</span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-thin mb-8">
            Ready to experience the future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join millions who have made AirPods Pro their daily companion for exceptional audio experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-xl font-medium transition-all transform hover:scale-105">
              Order AirPods Pro
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-12 py-4 rounded-full text-xl font-medium transition-all transform hover:scale-105">
              Compare Models
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 mb-4">AirPods Pro (2nd generation)</p>
          <p className="text-sm text-gray-600">
            © 2024 Apple Inc. All rights reserved. Privacy Policy | Terms of Use
          </p>
        </div>
      </footer>
    </div>
  );
}

