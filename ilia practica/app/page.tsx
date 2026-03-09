export default function Home() {
  const products = ["Товар 1", "Товар 2", "Товар 3", "Товар 4"];

  return (
    <div className="text-center text-black">
      <h1 className="text-2xl font-bould mb-30">Главная</h1>
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