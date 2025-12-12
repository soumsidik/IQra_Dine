import { BookOpen, ArrowRight } from 'lucide-react';
import discoveriesData from '../data/discoveries.json';

export default function Discoveries() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
            Découvertes Récentes
          </h2>
          <p className="text-xl text-gray-700">
            Explorez les merveilles scientifiques révélées dans le Coran il y a plus de 1400 ans
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {discoveriesData.discoveries.map((discovery) => (
            <div
              key={discovery.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={discovery.imageUrl}
                  alt={discovery.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {discovery.domain}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {discovery.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {discovery.description}
                </p>

                <div className="bg-amber-50 rounded-xl p-4 mb-4 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-800">
                      Sourate {discovery.surah} - Verset {discovery.verse}
                    </span>
                  </div>
                  <p className="text-amber-900 text-right font-arabic text-lg leading-relaxed">
                    {discovery.arabicText}
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4">
                  Lire la découverte
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Voir toutes les découvertes
          </button>
        </div>
      </div>
    </section>
  );
}
