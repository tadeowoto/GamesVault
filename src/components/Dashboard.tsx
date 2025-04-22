import { useContext, useState } from "react";
import { GameContext } from "../context/GamesContext";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { MyGame } from "../types/types";
import { status } from "../types/types";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { MainDashboard } from "./MainDashboard";

export const Dashboard = () => {
  //TODO COMPONETIZAR EL DASHBOARD
  //TODO HACER EL V2 DEL FORM CON VALORACION PROGRESO Y HORAS JUGADAS

  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const {
    mappedGames,
    setMyGames,
    setHoursPlayed,
    setPlayingGamesCount,
    setCompletedGamesCount,
    setTotalGamesCount,
  } = context;
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
  const [selectedImage, setSelectedImage] = useState(gamesOptions[0]?.image);
  const [selectedTitle, setSelectedTitle] = useState("Grand Theft Auto V");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const game = JSON.parse(data.get("game") as string);
    const status = data.get("status");
    const review = data.get("review");
    const hours = data.get("hours");

    setHoursPlayed((prev) => prev + Number(hours));

    if (status === "completed") {
      setCompletedGamesCount((prev) => prev + 1);
      setTotalGamesCount((prev) => prev + 1);
    } else if (status === "playing") {
      setPlayingGamesCount((prev) => prev + 1);
      setTotalGamesCount((prev) => prev + 1);
    }

    const newGame: MyGame = {
      id: game.value,
      name: game.label,
      background_image: game.image,
      status: status as status,
      review: review as string,
      hours: Number(hours),
    };
    setMyGames((prev) => [...prev, newGame]);
    setIsMenuOpen(false);
  };

  return isMenuOpen ? (
    //TODO COMPONETIZAR EL EL COMPONENTE QUE SE MUESTRA CON EL OPTION
    <div className=" w-full min-h-screen flex flex-col gap-10 p-3 ">
      <div className="w-full flex items-center gap-2 justify-center">
        <ArrowLeftIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />
        <h1 className="text-center text-xl font-semibold">Add a new game</h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-center items-center gap-2"
        >
          <select
            name="game"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 w-full justify-between h-auto py-3"
            onChange={(e) => {
              const selectedGame = JSON.parse(e.target.value);
              setSelectedTitle(selectedGame.label);
              setSelectedImage(selectedGame.image);
            }}
          >
            {gamesOptions.map((game) => {
              return (
                <option key={game.value} value={JSON.stringify(game)}>
                  {game.label}
                </option>
              );
            })}
          </select>
          <div className="w-full h-90 border-b border-accent mb-5">
            <img src={selectedImage} className="w-full h-10/12 object-cover" />
            <h1 className="text-center mt-2 text-2xl">{selectedTitle}</h1>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl tracking-wide">Game experience</h1>
              <div className="w-full h-10 flex items-center gap-2">
                <input
                  type="radio"
                  id="completed"
                  name="status"
                  value="completed"
                  required
                  className="accent-[#6330B6] w-4 h-4"
                />
                <label htmlFor="completed">Completed</label>

                <input
                  type="radio"
                  id="dropped"
                  name="status"
                  value="dropped"
                  required
                  className="accent-[#6330B6] w-4 h-4"
                />
                <label htmlFor="dropped">Dropped</label>

                <input
                  type="radio"
                  id="playing"
                  name="status"
                  value="playing"
                  required
                  className="accent-[#6330B6] w-4 h-4"
                />
                <label htmlFor="playing">Playing</label>
              </div>
            </div>
          </div>
          <div className="w-full h-20 ">
            <label htmlFor="hours">Hours played</label>
            <input
              type="number"
              name="hours"
              placeholder="hours"
              className="w-full h-10 rounded-lg bg-background p-2 text-text-primary border border-accent"
            />
          </div>
          <div className="w-full h-fit flex flex-col gap-2">
            <label htmlFor="review" className="text-xl tracking-wide">
              My review
            </label>
            <textarea
              name="review"
              id=""
              placeholder="review"
              className="w-full h-40 rounded-lg bg-background p-2 text-text-primary border border-accent"
            ></textarea>
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
