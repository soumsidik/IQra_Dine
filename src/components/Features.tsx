import { 
  BookOpen, 
  Globe, 
  MessageSquare, 
  Heart, 
  Star, 
  Atom,
  Users,        // communauté
  Compass,      // boussole
  MoonStar      // prière islam
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Fil d\'Actualité',
    description: 'Découvrez chaque jour de nouvelles révélations scientifiques confirmées par le Coran',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Globe,
    title: '10 Domaines Scientifiques',
    description: 'Explorez l\'astronomie, la géologie, l\'embryologie, l\'océanologie et bien plus encore',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: MessageSquare,
    title: 'Assistant Hafiz IA',
    description: 'Discutez avec notre intelligence artificielle formée sur le Coran et les Hadiths authentiques',
    color: 'from-emerald-600 to-emerald-700',
  },
  {
    icon: Heart,
    title: 'Favoris Personnalisés',
    description: 'Sauvegardez vos découvertes préférées et créez votre bibliothèque personnelle',
    color: 'from-amber-600 to-amber-700',
  },
  {
    icon: Star,
    title: 'Contenu Enrichi',
    description: 'Vidéos éducatives, images, versets coraniques et contexte historique détaillé',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Users,
    title: 'Communauté Active',
    description: 'Rejoignez une communauté passionnée par la connaissance islamique et scientifique',
    color: 'from-amber-600 to-amber-700',
  },
  {
    icon: Compass,
    title: 'Boussole Qibla',
    description: 'Trouvez la direction de la prière avec précision et facilitez vos pratiques religieuses au quotidien.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: MoonStar,
    title: 'Heures de Prière',
    description: 'Consultez facilement les horaires précis des prières pour votre ville et ne manquez jamais un moment de dévotion.',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
            Fonctionnalités Exceptionnelles
          </h2>
          <p className="text-xl text-gray-700">
            Une application complète pour explorer la science à travers le prisme du Coran
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
