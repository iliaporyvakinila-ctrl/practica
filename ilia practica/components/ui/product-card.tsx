import Image from 'next/image';

export const ProductCard = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-64 w-full">
        <Image 
          src="/images/products/product-1.jpg" 
          alt="Product Image"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">Название товара</h3>
        <p className="text-gray-500 mt-2">Описание товара, которое мы захардкодили для всех карточек.</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold">$99.99</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};