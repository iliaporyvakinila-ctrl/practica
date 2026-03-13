import Image from 'next/image';
import logoImage from '@/public/images/logo.png';  
import heroImage from '@/public/images/hero.jpg';

export default function Home() {
  const products = ["Товар 1", "Товар 2", "Товар 3", "Товар 4"];

  return (
    <div className="text-center text-black">
      <h1 className="text-2xl font-bould mb-30">Главная</h1>
      <Image 
        src={logoImage} 
        alt="Логотип"
        className="w-32 h-auto"
      />
      
      <Image 
        src={heroImage} 
        alt="Герой"
        className="w-full h-64 object-cover"
      />
      <div className="grid grid-cols-4 gap-6">
        {products.map((product, i) => (
          <div
            key={i}
            className="border p-4 rounded bg-white shadow hover:shadow-lg transition"
          >
            {product}
          </div>
          
        ))}
      </div>
    </div>
  );
}