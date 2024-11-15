import MainLayout from '@/components/layouts/MainLayout';
import TechStack from '@/components/sections/TechStack';

export default function TechStackPage() {
  return (
    <MainLayout>
      <div className="pt-32">
        <TechStack />
      </div>
    </MainLayout>
  );
}
