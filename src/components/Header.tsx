export default function Header() {
  return (
      <header className="flex justify-between items-center px-4 py-4">
        <img
          src="/LOOP2.png" // Chemin de ton logo
          alt="Logo Loop"
          className="h-8"
        />
        <button className="bg-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-full hover:bg-orange-600">
          Devenir bêta-testeur
        </button>
      </header>
  );
}
