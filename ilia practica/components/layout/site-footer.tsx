export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        © {currentYear} Мой первый Next.js проект
      </div>
    </footer>
  );
}
