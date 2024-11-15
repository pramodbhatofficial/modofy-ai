'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const router = useRouter();

  const scheduleConsultation = () => {
    router.push('/contact');
  };

  const exploreSolutions = () => {
    router.push('/solutions');
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium">
          Enterprise-Grade Data & AI Solutions
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-tight">
          Building Intelligent Data Infrastructure
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Modern Data Stack implementation to Advanced AI Solutions.
          <br className="hidden md:block" />
          Expert team with 12+ years of experience in data engineering and analytics.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary CTA */}
          <button 
            onClick={scheduleConsultation}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg flex items-center justify-center group transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            <span>Schedule Technical Consultation</span>
            <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

          {/* Secondary CTA */}
          <button 
            onClick={exploreSolutions}
            className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg transition-all duration-300 hover:bg-blue-500/5 flex items-center justify-center group"
          >
            <span>Explore Solutions</span>
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Optional: Add social proof or trust indicators */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-8 items-center text-gray-500">
            <span className="text-lg font-semibold">HashiCorp</span>
            <span className="text-lg font-semibold">Eightfold</span>
            <span className="text-lg font-semibold">FairPrice</span>
            <span className="text-lg font-semibold">Lazada</span>
            <span className="text-lg font-semibold">Cognizant</span>
          </div>
        </div>

        {/* Optional: Add floating decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
