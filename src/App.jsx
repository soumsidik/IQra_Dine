import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Domains from './components/Domains';
import Discoveries from './components/Discoveries';
import AppPreview from './components/AppPreview';
import CommunityStats from './components/CommunityStats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Domains />
      <Discoveries />
      <AppPreview />
      <CommunityStats />
      <Footer />
    </div>
  );
}

export default App;
