import { MyGame } from "../types/types";
import { status } from "../types/types";
import { useContext } from "react";
import { GameContext } from "../context/GamesContext";
import { useState } from "react";

type AddGameFormProps = {
  setIsMenuOpen: (value: boolean) => void;
};

export const AddGameForm = ({ setIsMenuOpen }: AddGameFormProps) => {
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
    setIsMenuOpen(false); // Ahora esto funcionará correctamente
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto h-full flex flex-col justify-center items-center gap-4 px-4 md:px-6 lg:px-8"
    >
      <select
        name="game"
        className="w-full md:w-4/5 lg:w-3/4 inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 h-12"
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
      <div className="w-full md:w-4/5 lg:w-3/4 h-[300px] md:h-[400px] border-b border-accent mb-5">
        <img src={selectedImage} className="w-full h-[85%] object-cover rounded-lg" />
        <h1 className="text-center mt-4 text-xl md:text-2xl">{selectedTitle}</h1>
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
  );
};
