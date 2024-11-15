'use client';

import React from 'react';
import { CheckCircle, Layers, Database, LineChart, Bot } from 'lucide-react';

const solutions = [
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Modern Data Stack Implementation",
    description: "End-to-end data infrastructure using best-in-class open-source tools",
    features: [
      "Airbyte for ELT Pipeline",
      "dbt for Transformations",
      "Dagster Orchestration",
      "Delta Lake Storage"
    ]
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Data Engineering Excellence",
    description: "Robust data engineering solutions from ingestion to gold layer",
    features: [
      "Bronze/Silver/Gold Architecture",
      "Real-time Processing",
      "Data Quality Framework",
      "ACID Compliance"
    ]
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "Predictive analytics and ML solutions for business intelligence",
    features: [
      "Prophet Forecasting",
      "Scikit-learn Models",
      "Custom ML Pipelines",
      "AutoML Solutions"
    ]
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Enterprise AI Solutions",
    description: "Custom AI applications powered by latest LLM technologies",
    features: [
      "LangChain Integration",
      "Custom LLM Applications",
      "RAG Implementation",
      "AI Automation"
    ]
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Enterprise Solutions
          </h2>
          <p className="text-white text-xl max-w-2xl mx-auto font-medium">
            End-to-end data and AI solutions built on modern open-source technologies
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="p-8 rounded-xl bg-gray-800/80 hover:bg-gray-800/95 transition-all group cursor-pointer border border-gray-700 hover:border-blue-500">
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{solution.title}</h3>
              <p className="text-gray-200 mb-6 text-lg">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-base text-gray-100">
                    <CheckCircle className="h-5 w-5 mr-3 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
