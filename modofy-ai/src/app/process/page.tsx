import MainLayout from '../../components/layouts/MainLayout';

export default function ProcessPage() {
  return (
    <MainLayout>
      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Process</h1>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep 
              number="01"
              title="Assessment"
              description="Technical evaluation and architecture planning"
            />
            <ProcessStep 
              number="02"
              title="Foundation"
              description="Data infrastructure and pipeline setup"
            />
            <ProcessStep 
              number="03"
              title="Implementation"
              description="ETL processes and data modeling"
            />
            <ProcessStep 
              number="04"
              title="Optimization"
              description="Performance tuning and automation"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

const ProcessStep = ({ number, title, description }: { 
  number: string; 
  title: string; 
  description: string; 
}) => (
  <div className="p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all border border-gray-700 hover:border-blue-500">
    <div className="text-blue-500 text-2xl font-bold mb-4">{number}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);
