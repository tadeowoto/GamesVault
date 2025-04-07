import { GameCard } from "./GameCard";
import { useContext } from "react";
import { GameContext } from "../context/GamesContext";

const GamesGridContainer = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  return (
    <article className="w-full h-full flex items-center justify-center ">
      <div className="w-full h-fit p-10 grid grid-cols-1 gap-12 place-items-center bg-bg-card border-t border-gray-600 md:grid-cols-2">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </article>
  );
};

export default GamesGridContainer;
