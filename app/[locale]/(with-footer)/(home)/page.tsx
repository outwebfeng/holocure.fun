'use server';

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import HomeContent from './HomeContent';

type Props = {
  params: { locale: string };
};

export default async function Page({ params: { locale } }: Props) {
  // This is a server component, so we can use server-only APIs
  unstable_setRequestLocale(locale);
  
  // Get translations
  const t = await getTranslations('Home');

  // Prepare translations object
  const translations = {
    hero: {
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      description: t('hero.description'),
      playNow: t('hero.playNow'),
    },
    introduction: {
      title: t('introduction.title'),
      description: t('introduction.description'),
      steps: t.raw('introduction.steps'),
    },
    features: {
      title: t('features.title'),
      description: t('features.description'),
      list: t.raw('features.list'),
    },
    testimonials: {
      title: t('testimonials.title'),
      description: t('testimonials.description'),
      list: t.raw('testimonials.list'),
    },
    faq: {
      title: t('faq.title'),
      description: t('faq.description'),
      list: t.raw('faq.list'),
    },
    download: {
      title: t('download.title'),
      description: t('download.description'),
      steam: t('download.steam'),
      itch: t('download.itch'),
    },
  };

  return (
    <HomeContent translations={translations} />
  );
}
