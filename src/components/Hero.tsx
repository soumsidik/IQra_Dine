import { Smartphone, BookOpen, Brain, Star } from 'lucide-react';
import splashLogo from "../assets/splash_logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-3 bg-emerald-100 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
              <span className="text-emerald-800 font-medium">Application Mobile Islamique</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-emerald-900 leading-tight">
              IQra Dine
            </h1>

            <p className="text-2xl lg:text-3xl text-amber-700 font-semibold">
              إِقْرَأْ بِاسْمِ رَبِّكَ
            </p>

            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              Plongez au cœur des découvertes et connaissances scientifiques à la lumière du noble Coran.
              Explorez le lien fascinant entre la science moderne et la sagesse coranique.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3">
                <Smartphone className="w-6 h-6" />
                Télécharger l'app
              </button>
              <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-emerald-600 flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                En savoir plus
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-800">10+</div>
                <div className="text-sm text-gray-600 mt-1">Domaines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-800">250+</div>
                <div className="text-sm text-gray-600 mt-1">Découvertes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-800">50K+</div>
                <div className="text-sm text-gray-600 mt-1">Utilisateurs</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <img 
                    src={splashLogo}
                    alt="IQra Dine Logo"
                    className="w-64 h-64 object-contain mx-auto"
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                    <Brain className="w-8 h-8 text-amber-400" />
                    <div>
                      <div className="text-white font-semibold">Assistant Hafiz IA</div>
                      <div className="text-emerald-100 text-sm">Discutez avec notre IA coranique</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                    <BookOpen className="w-8 h-8 text-amber-400" />
                    <div>
                      <div className="text-white font-semibold">Découvertes Quotidiennes</div>
                      <div className="text-emerald-100 text-sm">Nouvelles révélations scientifiques</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#065f46" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  );
}
