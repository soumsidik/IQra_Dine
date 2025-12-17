import Hero from './Hero';
import Features from './Features';
import Domains from './Domains';
import Discoveries from './Discoveries';
import AppPreview from './AppPreview';
import CommunityStats from './CommunityStats';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Domains />
      <Discoveries />
      <AppPreview />
      <CommunityStats />
    </>
  );
}