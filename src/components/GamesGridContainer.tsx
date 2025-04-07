import { GameCard } from "./GameCard";
import { useContext } from "react";
import { GameContext } from "../context/GamesContext";

const GamesGridContainer = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const { mappedGames } = context;

  return (
    <article className="w-full h-full flex items-center justify-center">
      <div className="w-full h-fit p-10 grid grid-cols-1 gap-12 place-items-center bg-bg-card border-t border-gray-600 md:grid-cols-2">
        {mappedGames.map((game) => (
          <GameCard
            key={game.id}
            background_image={game.background_image}
            name={game.name}
            released={game.released}
            status=""
            title={game.name}
            screenshots={game.screenshots}
            rating={game.rating}
          />
        ))}
      </div>
    </article>
  );
};

export default GamesGridContainer;
