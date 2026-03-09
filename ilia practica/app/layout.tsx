import MainHeader from '@/components/layout/main-header';
import SiteFooter from '@/components/layout/site-footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="font-sans">
        <MainHeader />
        <main className="container mx-auto p-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
