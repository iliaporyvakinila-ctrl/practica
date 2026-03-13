import Image from 'next/image';


type ProductCardProps = {
  imageSrc: string;
}

export default function ProductCard({ imageSrc }: ProductCardProps) {
  return (
    
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="relative w-full h-48 mb-4">
       
        <Image 
          src={imageSrc} 
          alt="Товар"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
       <h3 className="text-lg font-bold">товарная продукция</h3>
      <p className="text-gray-600">1673 ₽</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        В корзину
      </button>
      </div>
  );
};