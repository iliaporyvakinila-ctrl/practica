import MainHeader from '@/components/layout/main-header';
import SiteFooter from '@/components/layout/site-footer';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Добро пожаловать!</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">Товар 1</h2>
          <p>Описание товара</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">Товар 2</h2>
          <p>Описание товара</p>
        </div>
      </div>
    </div>
  );
}