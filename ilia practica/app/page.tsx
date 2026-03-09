export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border p-4 rounded shadow bg-white">
        <h3 className="text-lg font-bold">Товар 1</h3>
        <p className="text-gray-500">Описание товара</p>
      </div>
      <div className="border p-4 rounded shadow bg-white">
        <h3 className="text-lg font-bold">Товар 2</h3>
        <p className="text-gray-500">Описание товара</p>
      </div>
    </div>
  );
}