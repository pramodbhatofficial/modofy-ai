import MainLayout from '@/components/layouts/MainLayout';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Solutions from '@/components/sections/Solutions';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <TechStack />
      <Solutions />
    </MainLayout>
  );
}
