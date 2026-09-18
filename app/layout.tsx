import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'دليل حضارات العراق | Iraq Heritage Guide',
  description: 'دليل تفاعلي للمواقع الأثرية العراقية والرحلات الثقافية.',
  metadataBase: new URL('https://iraq-heritage-guide.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
