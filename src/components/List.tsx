import { useContext } from "react";
import { GameContext } from "../context/GamesContext";
import { MinimalCard } from "./MinimalCard";
import { motion } from "framer-motion";

export const List = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const { myGames } = context;

  return (
    <motion.article
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full min-h-screen p-2 bg-bg-card"
    >
      <header className="w-full h-10 mb-5">
        <h1 className="text-2xl text-text-primary">My Vault</h1>
      </header>
      {myGames.length === 0 ? (
        <div className="w-full flex justify-center items-center">
          <h1 className="text-2xl text-text-primary">No games added yet</h1>
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 place-items-center gap-4">
          {myGames.map((game) => (
            <MinimalCard
              key={game.id}
              image={game.background_image}
              status={game.status}
            />
          ))}
        </div>
      )}
    </motion.article>
  );
};
