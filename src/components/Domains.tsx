import { Atom, Moon, Mountain, Sprout, Waves, Baby, Globe, Bug, BookOpen, FlaskConical } from 'lucide-react';
import domainsData from '../data/domains.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  atom: Atom,
  moon: Moon,
  mountain: Mountain,
  sprout: Sprout,
  waves: Waves,
  baby: Baby,
  globe: Globe,
  bug: Bug,
  'book-open': BookOpen,
  'flask-conical': FlaskConical,
};

export default function Domains() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
            Explorez 10 Domaines Scientifiques
          </h2>
          <p className="text-xl text-gray-700">
            Chaque domaine révèle des liens fascinants entre découvertes modernes et sagesse coranique
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {domainsData.domains.map((domain) => {
            const Icon = iconMap[domain.icon] || Atom;
            return (
              <div
                key={domain.id}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-400 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-emerald-900 mb-2">
                    {domain.nameFr}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {domain.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      {domain.contentCount} découvertes
                    </span>
                    {domain.isPopular && (
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Populaire
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Plus de <span className="font-bold text-emerald-700">250 découvertes scientifiques</span> référencées et documentées
          </p>
        </div>
      </div>
    </section>
  );
}
