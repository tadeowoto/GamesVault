import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { MainDashboard } from "./MainDashboard";
import { AddGameForm } from "./AddGameForm";

export const Dashboard = () => {
  //TODO HACER EL V2 DEL FORM CON VALORACION PROGRESO Y HORAS JUGADAS
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  return isMenuOpen ? (
    <div className="w-full min-h-screen flex flex-col gap-10 p-3">
      <div className="w-full flex items-center gap-2 justify-center">
        <ArrowLeftIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />
        <h1 className="text-center text-xl font-semibold">Add a new game</h1>
      </div>
      <div>
        <AddGameForm setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  ) : (
    <section className="w-full min-h-screen bg-bg-card flex flex-col gap-5 items-center">
      <header className="w-full h-30 mb-10 flex flex-col items-center justify-center border-gray-600 border-b">
        <h1 className="text-xl text-text-primary mb-2">Dashboard</h1>
        <p className="text-md">Welcome to your games vault</p>
        <button
          className=" flex  gap-2 py-2 px-4 mt-2 bg-accent-hover rounded-xl mb-3"
          onClick={handleMenu}
        >
          {<PlusCircleIcon className="w-5 h-5" />}
          Add new game
        </button>
      </header>
      <MainDashboard />
    </section>
  );
};
