import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">Mentions Légales</h1>
      
      <p className="text-gray-600 mb-8 text-center italic">
        Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">1. Éditeur du Site et de l'Application</h2>
        <ul className="list-none space-y-2 text-gray-700">
          <li><strong>Nom :</strong> IQra Dine</li>
          <li><strong>Forme juridique :</strong> [À spécifier, ex. : Société par Actions Simplifiée (SAS)]</li>
          <li><strong>Siège social :</strong> [Adresse complète, ex. : 123 Rue Exemple, 75000 Paris, France]</li>
          <li><strong>Capital social :</strong> [Montant, ex. : 10 000 €]</li>
          <li><strong>Numéro SIRET :</strong> [Numéro SIRET]</li>
          <li><strong>Numéro TVA intracommunautaire :</strong> [Numéro TVA]</li>
          <li><strong>Directeur de la publication :</strong> [Nom du responsable, ex. : John Doe]</li>
          <li><strong>Contact :</strong> <a href="mailto:contact@iqradine.com" className="text-emerald-600 hover:underline">contact@iqradine.com</a></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">2. Hébergeur</h2>
        <ul className="list-none space-y-2 text-gray-700">
          <li><strong>Nom :</strong> [Nom de l'hébergeur, ex. : OVH]</li>
          <li><strong>Adresse :</strong> [Adresse de l'hébergeur, ex. : 2 rue Kellermann, 59100 Roubaix, France]</li>
          <li><strong>Téléphone :</strong> [Numéro de téléphone]</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">3. Propriété Intellectuelle</h2>
        <p className="text-gray-700 leading-relaxed">
          Tous les contenus présents sur IQra Dine (textes, images, vidéos, etc.) sont protégés par le droit d'auteur et les droits de propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable. Les sources sont citées lorsque applicable, en respect des droits des auteurs originaux (Dr Zakir Naik, Harun Yahya, etc.).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">4. Responsabilité</h2>
        <p className="text-gray-700 leading-relaxed">
          IQra Dine s'efforce de fournir des informations précises et à jour, mais ne saurait être tenu responsable d'éventuelles erreurs ou omissions. Les utilisateurs sont invités à vérifier les informations auprès de sources primaires.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">5. Contact</h2>
        <p className="text-gray-700 leading-relaxed">
          Pour toute question, veuillez nous contacter à : <a href="mailto:contact@iqradine.com" className="text-emerald-600 hover:underline">contact@iqradine.com</a>.
        </p>
      </section>
    </div>
  );
}