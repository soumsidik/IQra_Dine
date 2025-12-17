import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Confidential from './components/Confidential';
import MentionsLegales from './components/MentionsLegales';

function App() {
  return (
    <Router>
      <Routes>
        {/* Toutes les pages utilisent le même Layout (Header + Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> {/* Page d'accueil */}
          <Route path="/confidential" element={<Confidential />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* Tu peux ajouter d'autres pages ici plus tard */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;