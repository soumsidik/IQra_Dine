import { Users, BookOpen, Globe, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Utilisateurs Actifs',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: BookOpen,
    value: '250+',
    label: 'Découvertes Référencées',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Globe,
    value: '40+',
    label: 'Pays Représentés',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Satisfaction Utilisateurs',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function CommunityStats() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Une Communauté en Pleine Croissance
          </h2>
          <p className="text-xl text-emerald-100">
            Rejoignez des milliers de passionnés dans la quête de la connaissance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-emerald-100 text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 border border-white border-opacity-20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Rejoignez IQra Dine dès aujourd'hui
            </h3>
            <p className="text-xl text-emerald-100 mb-8">
              Commencez votre voyage à la découverte des merveilles scientifiques du Coran
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-emerald-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1">
                Télécharger Maintenant
              </button>
              <button className="bg-amber-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1">
                En Savoir Plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
