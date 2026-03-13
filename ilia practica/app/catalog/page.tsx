import  DesktopCard  from '@/components/ui/product-card';

export default function CatalogPage() {
  return (
    <div className="container mx-auto p-8">
     <h1 className="
        text-4xl font-bold mb-8
        
        md:text-3xl        {/* Планшеты: меньше */}
        sm:text-2xl        {/* Телефоны: еще меньше */}
      ">
        Каталог товаров
      </h1>
      
      <div className="
        flex flex-wrap gap-6
        justify-center
        
        md:gap-4           {/* Планшеты: расстояние меньше */}
        sm:gap-3           {/* Телефоны: еще меньше */}
      ">

        <DesktopCard imageSrc="/images/products/1.jpg" />
        <DesktopCard imageSrc="/images/products/2.jpg" />
        <DesktopCard imageSrc="/images/products/3.jpg" />
        <DesktopCard imageSrc="/images/products/4.jpg" />
        <DesktopCard imageSrc="/images/products/5.jpg" />
        <DesktopCard imageSrc="/images/products/6.jpg" />
      </div>
    </div>
  );
}