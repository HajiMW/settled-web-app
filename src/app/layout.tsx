import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Settled - Stop debating. Start swiping.',
  description: 'A group decision-making app. Swipe together to find what everyone agrees on - films, food, games, and more.',
  keywords: ['group decisions', 'swipe', 'films', 'restaurants', 'games', 'UK'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#0f0f23] text-deep-navy dark:text-soft-cream antialiased">
        {children}
      </body>
    </html>
  );
}
