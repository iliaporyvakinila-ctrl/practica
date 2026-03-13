import Link from 'next/link';
// components/layout/main-header.tsx
export default function MainHeader() {
  return (
    <header className="
      bg-gray-800 text-white p-6
      
      md:p-4              {/* Планшеты: отступы меньше */}
      sm:p-3              {/* Телефоны: еще меньше */}
    ">
      <div className="
        container mx-auto
        flex items-center justify-between
      ">
        {/* Логотип (виден на всех экранах) */}
        <div className="
          text-2xl font-bold
          md:text-xl        {/* Планшеты: меньше */}
          sm:text-lg        {/* Телефоны: еще меньше */}
        ">
          Логотип
        </div>
        
        {/* Навигация для ПК и планшетов */}
        {/* На ПК и планшетах показываем, на телефонах скрываем */}
        <nav className="
          hidden
          md:gap-4          {/* Планшеты: меньше расстояние */}
          sm:flex gap-6         {/* Телефоны: скрываем */}
        ">
          <Link href="/" className="hover:underline">Главная</Link>
          <Link href="/catalog" className="hover:underline">Каталог</Link>
          <Link href="/about" className="hover:underline">О нас</Link>
          <Link href="/contacts" className="hover:underline">Контакты</Link>
        </nav>
        
        {/* Бургер-меню для телефонов */}
        {/* На ПК и планшетах скрываем, на телефонах показываем */}
        <button className="
          block            {/* По умолчанию скрыто (на ПК) */}
          sm:hidden         {/* Телефоны: показываем */}
          text-2xl
        ">
          ☰
        </button>
      </div>
    </header>
  );
}
