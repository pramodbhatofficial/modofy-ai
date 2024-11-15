'use client';

import React, { useState } from 'react';
import { Database, Server, Cpu, BarChart2, Brain } from 'lucide-react';

const techStacks = {
  ingestion: ['Airbyte', 'Apache Kafka', 'Fivetran', 'dbt', 'Dagster'],
  storage: ['Databricks Delta Lake', 'Snowflake', 'BigQuery', 'Redshift'],
  processing: ['Apache Spark', 'dbt', 'Apache Flink', 'Databricks'],
  visualization: ['Tableau', 'Power BI', 'Apache Superset', 'Looker'],
  ai: ['Prophet', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'LangChain']
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('ingestion');

  return (
    <section id="stack" className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Tech Stack</h2>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            Industry-leading tools and technologies for modern data infrastructure
          </p>
        </div>
        <div className="bg-gray-900/30 rounded-xl p-8 backdrop-blur-sm border border-gray-800">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(techStacks).map((stack) => (
              <button
                key={stack}
                onClick={() => setActiveTab(stack)}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2
                  ${activeTab === stack 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-blue-400'
                  }`}
              >
                {stack === 'ingestion' && <Database className="h-4 w-4" />}
                {stack === 'storage' && <Server className="h-4 w-4" />}
                {stack === 'processing' && <Cpu className="h-4 w-4" />}
                {stack === 'visualization' && <BarChart2 className="h-4 w-4" />}
                {stack === 'ai' && <Brain className="h-4 w-4" />}
                {stack.charAt(0).toUpperCase() + stack.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStacks[activeTab as keyof typeof techStacks]?.map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-b from-gray-800 to-gray-900 
                         rounded-xl p-6 text-center hover:from-blue-900/20 hover:to-blue-900/5 
                         transition-all duration-300 border border-gray-700 hover:border-blue-500"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-medium text-white group-hover:text-blue-400 transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
