'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

interface HomeContentProps {
  translations: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      playNow: string;
    };
    introduction: {
      title: string;
      description: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    features: {
      title: string;
      description: string;
      list: Array<{
        title: string;
        description: string;
      }>;
    };
    testimonials: {
      title: string;
      description: string;
      list: Array<{
        content: string;
        author: string;
      }>;
    };
    faq: {
      title: string;
      description: string;
      list: Array<{
        question: string;
        answer: string;
      }>;
    };
    download: {
      title: string;
      description: string;
      steam: string;
      itch: string;
    };
  };
}

export default function HomeContent({ translations }: HomeContentProps) {
  return (
    <>
      <ScrollToTop />
      {/* Hero Section */}
      <section id='hero' className='relative flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-sky-50 to-white'>
        <div className='absolute inset-0'>
          <Image
            src='/images/game-cover.jpg'
            alt='HoloCure Game Cover'
            layout='fill'
            objectFit='cover'
            className='opacity-20'
          />
        </div>
        <div className='relative z-10 mx-auto max-w-pc px-4 text-center sm:px-6 lg:px-8'>
          <h1 className='mb-4 text-4xl font-bold text-[rgb(54,198,255)] sm:text-6xl'>{translations.hero.title}</h1>
          <p className='mb-2 text-2xl font-semibold text-gray-800 sm:text-3xl'>{translations.hero.subtitle}</p>
          <p className='mb-8 text-lg text-gray-600'>{translations.hero.description}</p>
          <a
            href='https://store.steampowered.com/app/2420510/HoloCure__Save_the_Fans/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block rounded-lg bg-[rgb(54,198,255)] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[rgb(44,178,235)] hover:shadow-lg'
          >
            {translations.hero.playNow}
          </a>
        </div>
      </section>

      {/* How to Play Section */}
      <section id='introduction' className='bg-white py-16'>
        <div className='mx-auto max-w-pc px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{translations.introduction.title}</h2>
            <p className='mb-12 text-lg text-gray-600'>{translations.introduction.description}</p>
          </div>
          <div className='grid gap-8 md:grid-cols-3'>
            {translations.introduction.steps.map((step, index) => (
              <div key={index} className='rounded-lg bg-sky-50 p-6 text-center'>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>{step.title}</h3>
                <p className='text-gray-600'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='bg-gradient-to-b from-white to-sky-50 py-16'>
        <div className='mx-auto max-w-pc px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{translations.features.title}</h2>
            <p className='mb-12 text-lg text-gray-600'>{translations.features.description}</p>
          </div>
          <div className='grid gap-8 md:grid-cols-3'>
            {translations.features.list.map((feature, index) => (
              <div key={index} className='rounded-lg bg-white p-6 shadow-lg'>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section id='testimonials' className='bg-sky-50 py-16'>
        <div className='mx-auto max-w-pc px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{translations.testimonials.title}</h2>
            <p className='mb-12 text-lg text-gray-600'>{translations.testimonials.description}</p>
          </div>
          <div className='grid gap-8 md:grid-cols-3'>
            {translations.testimonials.list.map((testimonial, index) => (
              <div key={index} className='rounded-lg bg-white p-6 shadow-lg'>
                <p className='mb-4 text-gray-600'>{testimonial.content}</p>
                <p className='font-semibold text-gray-900'>- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id='download' className='py-24 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-8'>{translations.download.title}</h2>
          <p className='text-xl text-center text-gray-600 mb-12'>{translations.download.description}</p>
          <div className='flex justify-center gap-8'>
            <a
              href='https://store.steampowered.com/app/2420510/HoloCure__Save_the_Fans/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-8 py-4 bg-[#171a21] text-white rounded-lg hover:bg-[#2a475e] transition-colors'
            >
              <svg className='w-6 h-6 mr-2' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM5.5 12.7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.5 6.3c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z'/>
              </svg>
              {translations.download.steam}
            </a>
            <a
              href='https://kay-yu.itch.io/holocure'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-8 py-4 bg-[#fa5c5c] text-white rounded-lg hover:bg-[#ff4444] transition-colors'
            >
              <svg className='w-6 h-6 mr-2' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M3.13 1.338C2.08 1.96 1.5 3.42 1.5 5.5v13c0 2.08.58 3.54 1.63 4.162V1.338zm17.74 0v21.324C21.92 22.04 22.5 20.58 22.5 18.5v-13c0-2.08-.58-3.54-1.63-4.162zM5.632 3H18.368C17.268 3 16.5 3.768 16.5 4.868v14.264c0 1.1.768 1.868 1.868 1.868H5.632C6.732 21 7.5 20.232 7.5 19.132V4.868C7.5 3.768 6.732 3 5.632 3z'/>
              </svg>
              {translations.download.itch}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id='faq' className='bg-white py-16'>
        <div className='mx-auto max-w-pc px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{translations.faq.title}</h2>
            <p className='mb-12 text-lg text-gray-600'>{translations.faq.description}</p>
          </div>
          <div className='grid gap-6 md:grid-cols-2'>
            {translations.faq.list.map((faq, index) => (
              <div key={index} className='rounded-lg bg-sky-50 p-6'>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>{faq.question}</h3>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
