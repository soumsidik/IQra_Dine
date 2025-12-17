import { BookOpen, Mail, Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-emerald-950 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">IQra Dine</h3>
                <p className="text-emerald-300 text-sm">إِقْرَأْ بِاسْمِ رَبِّكَ</p>
              </div>
            </div>
            <p className="text-emerald-100 leading-relaxed mb-6">
              Découvrez le lien fascinant entre la science moderne et la sagesse coranique.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Découvrir</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-emerald-100 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#domains" className="text-emerald-100 hover:text-white transition-colors">Domaines</a></li>
              <li><a href="#discoveries" className="text-emerald-100 hover:text-white transition-colors">Découvertes</a></li>
              <li><a href="#features" className="text-emerald-100 hover:text-white transition-colors">Assistant Hafiz</a></li>
              <li><a href="#community" className="text-emerald-100 hover:text-white transition-colors">Communauté</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Ressources</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-emerald-100 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#blog" className="text-emerald-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#faq" className="text-emerald-100 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#support" className="text-emerald-100 hover:text-white transition-colors">Support</a></li>
              <li><a href="/confidential" className="text-emerald-100 hover:text-white transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-emerald-100 text-sm mb-1">Email</div>
                  <a href="mailto:contact@iqradine.com" className="text-white hover:text-amber-400 transition-colors">
                    contact@iqradine.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-emerald-100 text-sm mb-1">Langues</div>
                  <div className="text-white">Français, العربية, English, Español</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-200 text-sm text-center md:text-left">
              © {currentYear} IQra Dine. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/confidential" className="text-emerald-200 hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="/mentions-legales" className="text-emerald-200 hover:text-white transition-colors">Mentions légales</a>
              <a href="/cookies" className="text-emerald-200 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}