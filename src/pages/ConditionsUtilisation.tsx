import { Link } from 'react-router-dom';

export default function ConditionsUtilisation() {
  return (
    <section className="container mx-auto px-6 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold text-emerald-900 mb-6">
        Conditions d’utilisation
      </h1>

      <p className="text-gray-700 mb-6">
        L’utilisation de l’application IQra Dine implique l’acceptation pleine
        et entière de notre politique de confidentialité.
      </p>

      <Link
        to="/confidentialite"
        className="text-emerald-600 font-semibold hover:underline"
      >
        Consulter la politique de confidentialité →
      </Link>
    </section>
  );
}
