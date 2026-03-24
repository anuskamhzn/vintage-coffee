import Hero from '@/components/Hero';
import History from '@/components/History';
import Types from '@/components/Types';

export default function Home() {
  return (
    <main className="bg-[#f5e8d3] font-serif overflow-hidden">
      <Hero />
      <History />
      <Types />
      {/* Next sections coming soon... */}
    </main>
  );
}