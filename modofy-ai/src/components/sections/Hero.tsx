'use client';

import React from 'react';
import Link from 'next/link';
//import { ChevronRight } from 'react-icons/fa';  // For Font Awesome icons

import { ChevronRight, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm">
          Enterprise-Grade Data & AI Solutions
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-tight">
          Building Intelligent Data Infrastructure
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Modern Data Stack implementation to Advanced AI Solutions. 
          Expert team with 12+ years of experience in data engineering and analytics.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg flex items-center justify-center group"
          >
            Schedule Technical Consultation
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/solutions"
            className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg transition-colors"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
