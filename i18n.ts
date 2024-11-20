import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// en-US, zh-TW, ja-JP, id-ID
export const languages = [
  {
    code: 'en-US',
    lang: 'en',
    label: 'English',
  },
  {
    code: 'ja-JP',
    lang: 'jp',
    label: '日本語',
  },
  {
    code: 'id-ID',
    lang: 'id',
    label: 'Bahasa Indonesia',
  },
  {
    code: 'zh-TW',
    lang: 'tw',
    label: '繁體中文',
  },
];

export const locales = ['en', 'tw', 'jp', 'id'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
