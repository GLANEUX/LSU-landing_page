"use client";

import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-left px-4 py-6">
        <h1 className="text-2xl font-bold">
          Groupes & musiciens créés pour
          <br></br>
          <button className="bg-redTheme text-whiteTheme py-0 px-2 mt-1 rounded-full cursor-default">
            se rencontrer
          </button>
        </h1>
        <p className="text-xl font-medium text-whiteTheme mt-4">
          Votre groupe ne va pas se monter <br></br> tout seul.
        </p>

        {/* Search Inputs */}
        <div className="mt-6">
          <div className="bg-Inputblack border-gradient rounded-full flex items-center px-4 py-2 mb-4">
            <MagnifyingGlassIcon className="size-4" />
            <p className="bg-transparent flex-1 text-sm text-white px-2">
              Je cherche{" "}
              <Typewriter
                words={[
                  "un chanteur",
                  "une bassiste",
                  "un batteur",
                  "une guitariste",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>

          <div className="border-gradient rounded-full flex items-center px-4 py-2 mb-4">
            <MapPinIcon className="size-4 " />
            <p className="bg-transparent flex-1 text-sm text-white px-2">
              Paris, Lille, Bordeaux...
            </p>
          </div>
        </div>
      </section>

      {/* App Promotion */}
      <section className="text-center px-4 py-6">
        <div className="relative">
          <img
            src="/pexels-wendywei.png" // Chemin de l'image
            alt="Deux musiciens"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-lg font-bold">
              L'APP QUI FAIT <span className="text-red-500">VIVRE</span>
            </p>
            <p className="text-2xl font-extrabold">LA MUSIQUE</p>
          </div>
        </div>
        <p className="mt-4 text-sm">
          Rencontrez, collaborez et créez avec des musiciens du monde entier.
          Rejoignez-nous <span className="font-bold">dès maintenant</span>.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <img src="/appstore.png" alt="App Store" className="h-10" />
          <img src="/playstore.png" alt="Google Play" className="h-10" />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-6">
        {[
          {
            title: "Matchez",
            description: "Assemblez votre équipe musicale de rêve",
          },
          {
            title: "Collaborez",
            description:
              "Réalisez des projets musicaux collaboratifs qui vous ressemblent",
          },
          {
            title: "Vivez l'expérience",
            description: "Participez à des projets musicaux inédits",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start bg-gray-800 rounded-lg p-4 mb-4"
          >
            <span className="material-icons text-orange-500">check_circle</span>
            <div className="ml-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="text-center px-4 py-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="material-icons text-orange-500">email</span>
          <p>loop@gmail.com</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="material-icons text-orange-500">call</span>
          <p>01 56 39 29 40</p>
        </div>
      </section>
    </div>
  );
}
