import { GamesStatsDashoard } from "./GamesStatsDashoard";
import { useContext, useState } from "react";
import { GameContext } from "../context/GamesContext";

export const Dashboard = () => {
  //TODO AGREGAR ICONO DE AGREGAR AL BOTON
  //TODO COMPONETIZAR EL DASHBOARD

  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const { mappedGames } = context;
  console.log(mappedGames);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(true);
  };
  const gamesOptions = mappedGames.map((game) => {
    return {
      value: game.id,
      label: game.name,
      image: game.background_image,
    };
  });
  const [selectedImage, setSelectedImage] = useState(
    gamesOptions[0]?.image || ""
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return isMenuOpen ? (
    //TODO COMPONETIZAR EL EL COMPONENTE QUE SE MUESTRA CON EL OPTION
    <div>
      <div>
        <h1>Add a new game in your Vault</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <select
            onChange={(e) => {
              const selectedGame = gamesOptions.find(
                (game) => game.value === Number(e.target.value)
              );
              if (selectedGame) {
                setSelectedImage(selectedGame.image);
              }
            }}
          >
            {gamesOptions.map((game) => {
              return (
                <option key={game.value} value={game.value}>
                  {game.label}
                </option>
              );
            })}
          </select>
          <div>
            <img src={selectedImage} alt="" />
          </div>

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen bg-bg-card flex flex-col gap-5 items-center">
      <header className="w-full h-30 mb-10 flex flex-col items-center justify-center border-gray-600 border-b">
        <h1 className="text-xl text-text-primary mb-2">Dashboard</h1>
        <p className="text-md">Welcome to your games vault</p>
        <button
          className="py-2 px-4 mt-2 bg-accent-hover rounded-xl"
          onClick={handleMenu}
        >
          Add new game
        </button>
      </header>
      <GamesStatsDashoard title="Total de Juegos" totalGames={30} />
      <GamesStatsDashoard title="Juegos completados" />
      <GamesStatsDashoard title="Jugando Actualmente" />
      <GamesStatsDashoard title="Tiempo Total" />
    </div>
  );
};
