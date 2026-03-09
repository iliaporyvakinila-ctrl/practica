import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div>
          <Link href="/" className="text-2xl font-bold">Магазин</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="hover:underline">Главная</Link>
          <Link href="/catalog" className="hover:underline">Каталог</Link>
          <Link href="/about" className="hover:underline">О нас</Link>
          <Link href="/contacts" className="hover:underline">Контакты</Link>
        </div>
      </nav>
    </header>
  );
}