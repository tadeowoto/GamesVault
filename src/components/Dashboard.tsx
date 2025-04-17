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
  const [selectedTitle, setSelectedTitle] = useState("Grand Theft Auto V");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return isMenuOpen ? (
    //TODO COMPONETIZAR EL EL COMPONENTE QUE SE MUESTRA CON EL OPTION
    <div className="bg-red-200 w-full min-h-screen flex flex-col gap-10 ">
      <div className="w-full flex items-center gap-2 justify-center">
        <h1 className="text-center text-xl font-semibold">Add a new game</h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-center items-center gap-2"
        >
          <select
            onChange={(e) => {
              const selectedGame = gamesOptions.find(
                (game) => game.value === Number(e.target.value)
              );
              if (selectedGame) {
                setSelectedTitle(selectedGame.label);
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
          <div className="w-full h-90 bg-accent-muted">
            <img
              src={selectedImage}
              alt=""
              className="w-full h-10/12 object-cover"
            />
            <h1 className="text-center mt-2 text-2xl">{selectedTitle}</h1>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <label htmlFor="status">Status</label>
              <div className="w-full h-10 flex items-center gap-2">
                <input type="radio" id="completed" name="status" />
                <label htmlFor="completed">Completed</label>

                <input type="radio" id="dropped" name="status" />
                <label htmlFor="dropped">Dropped</label>

                <input type="radio" id="playing" name="status" />
                <label htmlFor="playing">Playing</label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="py-2 px-12 mt-1 bg-accent-hover rounded-lg"
          >
            Add to my colection
          </button>
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
