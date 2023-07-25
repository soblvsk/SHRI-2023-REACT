import { Layout } from '@/components/Layout/components';
import './globals.scss';
import { StoreProvider } from '@/redux/provider';

import classnames from 'classnames';

import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import { Metadata } from 'next';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
});

const sfProText = localFont({
  src: [
    {
      path: '../../public/fonts/SFProText/SFProText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProText/SFProText-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SFProText/SFProText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProText/SFProText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf',
  display: 'swap',
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
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
