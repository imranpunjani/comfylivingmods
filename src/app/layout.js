import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Comfy Living Mods - Home Modifications for Independent Living',
  description: 'Professional home modifications for seniors and individuals with mobility needs. Expert installation of grab bars, ramps, and accessibility solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
