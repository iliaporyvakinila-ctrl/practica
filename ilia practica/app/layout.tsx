import "./globals.css";
import MainHeader from "@/components/layout/main-header";
import SiteFooter from "@/components/layout/site-footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <MainHeader />
        <main className="flex-grow max-w-6xl mx-auto w-full p-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}