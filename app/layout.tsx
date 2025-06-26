import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/auth-context';
import { Toaster } from '@/components/ui/sonner';
import { AlgorandProvider } from '@/contexts/AlgorandProvider';
import { Header } from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CreatorHub - Where Creativity Meets Community',
  description: 'The ultimate platform for creators to showcase their work, collaborate, and grow their audience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <AlgorandProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Toaster
              position="top-right"
              closeButton
              richColors
              duration={4000}
              toastOptions={{
                style: {
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  color: '#374151',
                },
                className: 'cursor-pointer',
              }}
            />
          </AlgorandProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
