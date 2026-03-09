export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Главная страница</h1>
      <nav className="space-x-4">
        <a 
          href="/catalog" 
          className="text-blue-500 hover:underline"
        >
          Каталог
        </a>
        
        <a 
          href="/catalog/phone" 
          className="text-blue-500 hover:underline"
        >
          Телефоны
        </a>
        
        <a 
          href="/catalog/laptop" 
          className="text-blue-500 hover:underline"
        >
          Ноутбуки
        </a>
        
        <a 
          href="/contacts" 
          className="text-blue-500 hover:underline"
        >
          Контакты
        </a>
      </nav>
    </div>
  );
}
