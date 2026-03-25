import Hero from '@/components/Hero';
import History from '@/components/History';
import Types from '@/components/Types';
import FunFacts from '@/components/FunFacts';
import BrewingMethods from '@/components/BrewingMethods';
import Quiz from '@/components/Quiz';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalSip from '@/components/FinalSip';

export default function Home() {
  return (
    <main className="bg-[#f5e8d3] font-serif overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      <History />
      <Types />
      <FunFacts />
      <BrewingMethods />
      <Quiz />
      <FinalSip />
      {/* <Footer /> */}
    </main>
  );
}