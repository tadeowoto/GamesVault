import { useContext } from "react";
import { GameContext } from "../context/GamesContext";
import { MinimalCard } from "./MinimalCard";

export const List = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const { myGames } = context;

  return (
    <article className=" w-full min-h-screen p-2 bg-bg-card">
      <header className="w-full h-10 mb-5">
        <h1 className="text-2xl text-text-primary">My Vault</h1>
      </header>
      <div className="w-full grid grid-cols-3 place-items-center gap-4">
        {myGames.length === 0 ? (
          <>
            <div className="w-full ">
              <h1 className="text-2xl text-text-primary">No games added yet</h1>
            </div>
          </>
        ) : (
          myGames.map((game) => (
            <MinimalCard
              key={game.id}
              image={game.background_image}
              status={game.status}
            />
          ))
        )}
      </div>
    </article>
  );
};
