export type Locale = 'en' | 'fr';

export type RouteKey =
  | 'home'
  | 'about'
  | 'rules'
  | 'faq'
  | 'submit'
  | 'winners'
  | 'scholarships'
  | 'kerstan'
  | 'woodhams'
  | 'artSparrow';

export type NavKey = 'home' | 'scholarships' | 'rules' | 'winners' | 'faq' | 'about';

const brandLockupByLocale = {
  en: {
    title: 'Mensa Canada Scholarship Program',
    tagline: 'Unleashing potential',
  },
  fr: {
    title: 'Programme de bourses Mensa Canada',
    tagline: 'Reveler le potentiel',
  },
} as const;

function normalizeBasePath(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '';
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;

  return withLeadingSlash.endsWith('/') ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
}

const routes = {
  home: { en: '/', fr: '/fr/' },
  about: { en: '/about', fr: '/fr/a-propos' },
  rules: { en: '/rules', fr: '/fr/regles' },
  faq: { en: '/faq', fr: '/fr/faq' },
  submit: { en: '/submit', fr: '/fr/soumettre' },
  winners: { en: '/winners', fr: '/fr/gagnants' },
  scholarships: { en: '/scholarships', fr: '/fr/bourses' },
  kerstan: { en: '/scholarships/kerstan', fr: '/fr/bourses/kerstan' },
  woodhams: { en: '/scholarships/woodhams', fr: '/fr/bourses/woodhams' },
  artSparrow: { en: '/scholarships/art-sparrow', fr: '/fr/bourses/art-sparrow' },
} as const satisfies Record<RouteKey, Record<Locale, string>>;

const basePath = normalizeBasePath(import.meta.env.BASE_URL ?? '/');

export const navKeys: NavKey[] = ['home', 'scholarships', 'rules', 'winners', 'faq', 'about'];

export const brandLockup = brandLockupByLocale;

export const siteMetadata = {
  en: {
    siteName: brandLockupByLocale.en.title,
    defaultDescription:
      'The Mensa Canada Scholarship Programme offers scholarships of $1,000 to $2,500 to Canadian post-secondary students. Apply with a 250-word essay about your career goals.',
    localeLabel: 'English',
  },
  fr: {
    siteName: brandLockupByLocale.fr.title,
    defaultDescription:
      'Le Programme de bourses Mensa Canada offre des bourses de 1 000 $ à 2 500 $ aux étudiants postsecondaires canadiens. Posez votre candidature avec une dissertation de 250 mots sur vos objectifs de carrière.',
    localeLabel: 'Français',
  },
} as const;

export const headerCopy = {
  en: {
    brandTitle: brandLockupByLocale.en.title,
    brandSubtitle: brandLockupByLocale.en.tagline,
    nav: {
      home: 'Home',
      scholarships: 'Scholarships',
      rules: 'Rules',
      winners: 'Winners',
      faq: 'FAQ',
      about: 'About',
    },
    cta: 'Submit Essay',
    languageSwitch: 'Français',
    mobileToggle: 'Toggle menu',
    themeSwitchToDark: 'Dark mode',
    themeSwitchToLight: 'Light mode',
  },
  fr: {
    brandTitle: brandLockupByLocale.fr.title,
    brandSubtitle: brandLockupByLocale.fr.tagline,
    nav: {
      home: 'Accueil',
      scholarships: 'Bourses',
      rules: 'Règlements',
      winners: 'Gagnants',
      faq: 'FAQ',
      about: 'À propos',
    },
    cta: 'Soumettre',
    languageSwitch: 'English',
    mobileToggle: 'Afficher le menu',
    themeSwitchToDark: 'Mode sombre',
    themeSwitchToLight: 'Mode clair',
  },
} as const;

export const footerCopy = {
  en: {
    ctaTitle: 'Ready to Shape Your Future?',
    ctaBody: 'Submit your 250-word essay and you could earn a scholarship of $1,000 to $2,500.',
    ctaPrimary: 'Submit Your Essay',
    ctaSecondary: 'Read the Rules',
    about:
      'A registered charity supporting Canadian post-secondary students through merit-based essay scholarships since 2000.',
    quickLinksTitle: 'Quick Links',
    quickLinks: {
      about: 'About the Programme',
      rules: 'Rules & Eligibility',
      faq: 'Frequently Asked Questions',
      submit: 'Submit Your Essay',
      winners: 'Past Winners',
    },
    scholarshipsTitle: 'Scholarships',
    scholarships: {
      scholarships: 'Mensa Canada General',
      kerstan: 'Edgar Kerstan Memorial',
      woodhams: 'Frank & Betty Woodhams',
      artSparrow: 'Art Sparrow Memorial',
    },
    contactTitle: 'Contact',
    mensaLabel: 'Mensa Canada',
    addressLines: ['2909-361 Front Street West', 'Toronto, ON M5V 3R5'],
    copyright: 'Mensa Canada Scholarship Program. All rights reserved.',
    madeWith: 'Made with',
    madeFor: 'for Canadian students',
    mensaUrl: 'https://mensa.ca/',
  },
  fr: {
    ctaTitle: 'Prêt à tracer votre avenir?',
    ctaBody: 'Soumettez votre dissertation de 250 mots et vous pourriez obtenir une bourse de 1 000 $ à 2 500 $.',
    ctaPrimary: 'Soumettre votre dissertation',
    ctaSecondary: 'Lire les règlements',
    about:
      'Organisme de bienfaisance enregistré, le programme soutient les étudiants postsecondaires canadiens au moyen de bourses au mérite depuis 2000.',
    quickLinksTitle: 'Liens rapides',
    quickLinks: {
      about: 'À propos du programme',
      rules: 'Règlements et admissibilité',
      faq: 'Questions fréquentes',
      submit: 'Soumettre votre dissertation',
      winners: 'Anciens gagnants',
    },
    scholarshipsTitle: 'Bourses',
    scholarships: {
      scholarships: 'Bourse générale Mensa Canada',
      kerstan: 'Bourse commémorative Edgar Kerstan',
      woodhams: 'Bourse commémorative Frank et Betty Woodhams',
      artSparrow: 'Bourse commémorative Art Sparrow',
    },
    contactTitle: 'Nous contacter',
    mensaLabel: 'Mensa Canada',
    addressLines: ['2909-361 Front Street West', 'Toronto, Ontario M5V 3R5'],
    copyright: 'Programme de bourses Mensa Canada. Tous droits réservés.',
    madeWith: 'Créé avec',
    madeFor: 'pour les étudiants canadiens',
    mensaUrl: 'https://mensa.ca/fr/',
  },
} as const;

function normalizePath(pathname: string): string {
  if (!pathname) {
    return '/';
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (withLeadingSlash.length > 1 && withLeadingSlash.endsWith('/')) {
    return withLeadingSlash.slice(0, -1);
  }

  return withLeadingSlash;
}

function stripBasePath(pathname: string): string {
  const normalizedPath = normalizePath(pathname);

  if (!basePath) {
    return normalizedPath;
  }

  if (normalizedPath === basePath) {
    return '/';
  }

  if (normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath.slice(basePath.length) || '/';
  }

  return normalizedPath;
}

function applyBasePath(pathname: string): string {
  const normalizedPath = normalizePath(pathname);

  if (!basePath) {
    return normalizedPath;
  }

  return normalizedPath === '/' ? `${basePath}/` : `${basePath}${normalizedPath}`;
}

export function getLocalizedPath(locale: Locale, routeKey: RouteKey): string {
  return applyBasePath(routes[routeKey][locale]);
}

export function getAssetPath(assetPath: string): string {
  const withLeadingSlash = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;

  return basePath ? `${basePath}${withLeadingSlash}` : withLeadingSlash;
}

export function getLocaleFromPath(pathname: string): Locale {
  const normalizedPath = stripBasePath(pathname);

  return normalizedPath === '/fr' || normalizedPath.startsWith('/fr/') ? 'fr' : 'en';
}

export function getRouteFromPath(pathname: string): RouteKey {
  const normalizedPath = stripBasePath(pathname);

  for (const [routeKey, localizedRoutes] of Object.entries(routes) as [RouteKey, Record<Locale, string>][]) {
    if (
      normalizePath(localizedRoutes.en) === normalizedPath ||
      normalizePath(localizedRoutes.fr) === normalizedPath
    ) {
      return routeKey;
    }
  }

  return 'home';
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en';
}

export function getAlternatePath(locale: Locale, routeKey: RouteKey): string {
  return getLocalizedPath(getAlternateLocale(locale), routeKey);
}
