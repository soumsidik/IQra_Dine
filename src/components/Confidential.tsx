import React from 'react';

export default function Confidential() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
        Politique de Confidentialité
      </h1>

      <p className="text-gray-600 mb-8 text-center italic">
        Dernière mise à jour : 16 décembre 2025
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">1. Introduction</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bienvenue sur <strong>IQra Dine</strong>, une application mobile conçue pour revivifier la foi des croyants, inspirer les curieux et permettre à tous de découvrir les liens fascinants entre la science moderne et les enseignements du Noble Coran.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Inspirée par les travaux du Dr Zakir Naik, du professeur Harun Yahya et d'autres sources scientifiques et islamiques authentiques, IQra Dine offre un espace éducatif, spirituel et pratique pour approfondir sa connaissance et sa pratique religieuse au quotidien.
        </p>
        <p className="text-gray-700 leading-relaxed">
          La protection de votre vie privée est une priorité absolue pour nous. Cette politique explique clairement quelles données nous collectons, pourquoi, comment nous les utilisons et vos droits à cet égard.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">2. Données Collectées</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IQra Dine collecte uniquement les données strictement nécessaires au bon fonctionnement de ses fonctionnalités essentielles :
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
          <li>
            <strong>Géolocalisation (facultative)</strong> : Nous demandons l'accès à votre position uniquement si vous activez les fonctionnalités d’heures de prière et de boussole Qibla. Ces données sont utilisées exclusivement pour afficher les horaires de prière précis selon votre zone géographique et indiquer la direction de la Qibla. Aucune donnée de localisation n’est stockée ni transmise à des tiers.
          </li>
          <li>
            <strong>Notifications push (facultatives)</strong> : Si vous acceptez les notifications, nous utilisons un service de notification anonyme pour vous envoyer des rappels quotidiens des heures de prière et des découvertes scientifiques liées au Coran. Aucune information personnelle n’est associée à ces notifications.
          </li>
          <li>
            <strong>Aucune autre donnée personnelle</strong> : Nous ne collectons ni nom, ni email, ni numéro de téléphone, ni données d’identité, ni historique de navigation détaillé.
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Toutes les permissions (géolocalisation, notifications) sont demandées explicitement avec votre consentement, et vous pouvez les révoquer à tout moment dans les paramètres de votre appareil.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">3. Fonctionnalités de l'Application</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IQra Dine propose les fonctionnalités suivantes, toutes conçues dans le respect de la vie privée :
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Heures de prière et boussole Qibla</strong> : Calcul précis basé sur votre position géographique (avec votre accord).</li>
          <li><strong>Rappels quotidiens</strong> : Notifications pour les prières et découvertes inspirantes.</li>
          <li><strong>Hafiz IA</strong> : Un assistant intelligent basé sur un modèle de langage large, spécialement contextualisé pour répondre exclusivement dans le cadre religieux islamique (sources : Coran, Sunnah authentique, Hadiths sahih, Fiqh des grandes écoles). Hafiz IA incite systématiquement l’utilisateur à vérifier toute information auprès d’un savant ou imam qualifié.</li>
          <li><strong>Fil d’actualité des découvertes</strong> : Corrélations entre science moderne et versets coraniques (Astronomie, Embryologie, Océanologie, Physique, Biologie, Médecine, etc.).</li>
          <li><strong>Lecteur YouTube intégré</strong> : Visualisation directe de vidéos publiques éducatives et religieuses via liens YouTube (aucune donnée de visionnage n’est collectée).</li>
          <li><strong>Partage sur réseaux sociaux</strong> : Possibilité de partager des contenus inspirants (versets, découvertes, citations) vers d’autres applications (WhatsApp, Facebook, Twitter, etc.). Le partage utilise les mécanismes natifs de votre appareil.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">4. Utilisation et Partage des Données</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les données collectées (uniquement la géolocalisation temporaire lorsque activée) sont utilisées <strong>exclusivement en local sur votre appareil</strong> pour fournir les fonctionnalités demandées.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nous <strong>ne partageons aucune donnée personnelle</strong> avec des tiers, partenaires publicitaires ou services d’analyse.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Les appels à l’assistant Hafiz IA sont traités via un fournisseur de modèle de langage sécurisé, mais les requêtes sont anonymisées et ne contiennent aucune information personnelle identifiable.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">5. Cookies et Technologies Similaires</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sur le site web iqradine.com (le cas échéant), nous utilisons uniquement des cookies techniques nécessaires au fonctionnement (ex. : préférences de langue). Aucun cookie de suivi, publicité ou analytique n’est utilisé.
        </p>
        <p className="text-gray-700 leading-relaxed">
          L’application mobile n’utilise aucune technologie de suivi.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">6. Sécurité des Données</h2>
        <p className="text-gray-700 leading-relaxed">
          Nous appliquons des mesures de sécurité appropriées pour protéger les contenus de l’application et les rares données traitées (comme la position temporaire). Toutes les communications avec des services externes (notifications, IA) sont chiffrées.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">7. Vos Droits (RGPD et lois applicables)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Droit d’accès et d’information sur vos données</li>
          <li>Droit de révoquer votre consentement (géolocalisation, notifications)</li>
          <li>Droit de demander la suppression de toute donnée future</li>
          <li>Droit de porter réclamation auprès d’une autorité de protection des données</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Pour exercer ces droits, contactez-nous à l’adresse ci-dessous.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">8. Modifications de la politique</h2>
        <p className="text-gray-700 leading-relaxed">
          Nous pouvons mettre à jour cette politique en cas d’évolution des fonctionnalités ou des réglementations. Toute modification importante sera signalée dans l’application et sur cette page avec la nouvelle date de mise à jour.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">9. Contact</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour toute question relative à cette politique de confidentialité ou à vos données, veuillez nous contacter à :{' '}
          <a href="mailto:contact@iqradine.com" className="text-emerald-600 hover:underline font-medium">
            innovtica.intello211@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}