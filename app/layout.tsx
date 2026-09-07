import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gymvexa.major-chair-9080.chatgpt.site'),
  title: 'Gymvexa | Tu gimnasio en orden',
  description: 'Gestiona socios, accesos, membresías, caja, inventario y reportes desde una aplicación de escritorio creada para gimnasios.',
  openGraph: {
    title: 'Gymvexa | Tu gimnasio en orden',
    description: 'El centro de operación que tu gimnasio necesita.',
    type: 'website',
    locale: 'es_MX',
    images: [
      {
        url: '/og.png',
        width: 1920,
        height: 1035,
        alt: 'Panel de administración de Gymvexa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gymvexa | Tu gimnasio en orden',
    description: 'El centro de operación que tu gimnasio necesita.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>;
}
