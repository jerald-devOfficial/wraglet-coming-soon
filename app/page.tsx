'use client';

import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import Footer from './components/Footer';
import Link from 'next/link';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true
});

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between overflow-hidden relative'>
      <main
        className={`${quicksand.className} relative flex flex-col md:flex-row flex-grow w-full`}
      >
        <section className='md:flex-1 h-[30vh] md:h-auto bg-[#42BBFF] flex flex-col relative justify-between'>
          <div className='flex items-center space-x-3 pl-3 pt-3 md:pl-7 md:pt-7 lg:pl-12 lg:pt-12'>
            <Link href={'/'} className='relative block'>
              <Image
                src={'/logo/logo.png'}
                alt='Wraglet.com'
                height={48}
                width={50}
              />
            </Link>
            <Link
              href={'/'}
              className={`${quicksand.className} font-bold text-3xl text-white`}
            >
              wraglet
            </Link>
          </div>
          <div className='self-center hidden md:flex md:w-[312px] lg:w-[500px]'>
            <p
              className={`${quicksand.className} md:-mt-10 lg:mt-auto  md:font-medium md:text-base lg:text-3xl leading-[157%] lg:leading-[170%] text-white`}
            >
              Oops! That looks ugly. But don’t worry{' '}
              <span className='font-bold'>Wraglet</span> is currently under
              development...
            </p>
          </div>

          <div className='hidden md:mr-3 md:mb-3 lg:mr-6 lg:mb-6 self-end md:flex items-start md:w-[230px] lg:w-[290px] relative'>
            <p
              className={`${quicksand.className} md:font-normal md:text-xs lg:text-base leading-[162%] text-white`}
            >
              for the meantime, you can visit the showcase @{' '}
              <a
                className='font-bold text-[#1A475B]'
                href='https://www.wraglet.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                www.wraglet.vercel.app
              </a>
            </p>
          </div>
        </section>
        <section className='md:flex-1 flex-grow md:h-auto flex flex-col items-center justify-between md:justify-center bg-[#D3E1E8] overflow-hidden relative'>
          <div className='hidden relative md:block md:w-[300px] md:h-[290px] lg:w-[552px] lg:h-[535px]'>
            <Image
              src={'/logo/logo.png'}
              alt='Wraglet.com'
              fill
              sizes='(min-width: 768px) 100vw, (min-width: 1024px) 50vw, 33vw'
            />
          </div>

          <div className='m-auto flex md:hidden px-10 text-left'>
            <p
              className={`${quicksand.className} mt-auto font-medium text-2xl leading-loose text-[#104B65]`}
            >
              Oops! That looks ugly. But don’t worry{' '}
              <span className='font-bold'>Wraglet</span> is currently under
              development...
            </p>
          </div>

          <div className='md:hidden mr-5 mb-5 self-end flex items-start w-[300px] relative'>
            <p
              className={`${quicksand.className} font-medium text-base leading-relaxed text-[#3B81A0]`}
            >
              for the meantime, you can visit the showcase @{' '}
              <a
                className='font-bold text-[#1A475B]'
                href='https://www.wraglet.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                www.wraglet.vercel.app
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
