import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Recrutement basé sur des projets',
    description: 'Publiez des défis professionnels pour évaluer les compétences réelles des candidats.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Analyse des livrables par IA',
    description: 'Notre IA analyse les soumissions pour fournir des rapports détaillés et objectifs.',
    icon: LockClosedIcon,
  },
  {
    name: 'Classement automatisé des candidats',
    description: 'Classez les candidats en fonction de leurs performances pour simplifier la prise de décision.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Valorisation des profils atypiques',
    description: 'Offrez une chance équitable aux talents émergents, autodidactes et en reconversion.',
    icon: FingerPrintIcon,
  },
];

function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">Nos fonctionnalités</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Révolutionnez votre processus de recrutement
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Découvrez comment notre plateforme transforme le recrutement grâce à des outils innovants et des évaluations basées sur des projets concrets.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
