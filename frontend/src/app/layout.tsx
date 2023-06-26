import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import { StoreProvider } from '../redux/StoreProvider';

import './globals.css';
import classnames from 'classnames';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
});

const sfProText = localFont({
  src: [
    {
      path: './fonts/SFProText/SFProText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFProText/SFProText-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/SFProText/SFProText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SFProText/SFProText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf',
});

export const metadata: Metadata = {
  title: { default: '🎫 Билетопоиск', template: '%s | 🎫 Билетопоиск' },
  description: 'Omg it`s a biletopoisk?',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={classnames(roboto.variable, sfProText.variable)}>
        <StoreProvider>
          <Header />
          <main>
            <div className='container page__container'>{children} </div>
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
