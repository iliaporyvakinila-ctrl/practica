import { ProductCard } from '@/components/ui/product-card';

export default function CatalogPage() {
  const products = Array.from({ length: 6 });

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
      
      <div className="grid grid-cols-3 gap-6">
        {products.map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}