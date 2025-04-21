import { useContext } from "react";
import { GameContext } from "../context/GamesContext";

export const List = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const { myGames } = context;

  return (
    <article className="bg-red-200 w-full min-h-screen p-2">
      <header className="w-full h-30">
        <div className="">
          <h1 className="text-2xl text-text-primary">My Vault</h1>
        </div>
      </header>
      <div className="w-full bg-accent ">
        {myGames.map((game) => (
          <div key={game.id} className="w-full h-20 bg-red-300">
            <h1>{game.name}</h1>
          </div>
        ))}
      </div>
    </article>
  );
};
