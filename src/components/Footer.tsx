export default function Footer() {
  return (
    <footer className="bg-red-900 text-white px-4 py-6 text-center">
      <div className="mb-4">
        <img
          src="/Group1534.png" // Chemin du logo pour le footer
          alt="Logo Loop"
          className="h-8 mx-auto"
        />
        <p className="mt-2 text-sm">
          Loop, l'application de matchs entre musiciens amateurs.
        </p>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        {["facebook", "instagram", "twitter", "youtube"].map((icon, index) => (
          <span key={index} className="material-icons">
            {icon}
          </span>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="font-bold">NEWSLETTER</h4>
        <p className="text-sm mb-2">
          Inscrivez-vous à notre newsletter pour découvrir les meilleurs
          talents.
        </p>
        <div className="flex items-center bg-white text-black rounded-full p-2">
          <input
            type="email"
            placeholder="Votre adresse"
            className="flex-1 text-sm px-4 focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
            →
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400">© 2024 Loop. All Rights Reserved.</p>
    </footer>
  );
}
