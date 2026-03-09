import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex space-x-4">
        <Link href="/" className="hover:underline">Главная</Link>
        <Link href="/about" className="hover:underline">О нас</Link>
        <Link href="/blog/first-post" className="hover:underline">Блог</Link>
        <Link href="/catalog" className="hover:underline">Каталог</Link>
        <Link href="/contacts" className="hover:underline">Контакты</Link>
      </nav>
    </header>
  );
}
