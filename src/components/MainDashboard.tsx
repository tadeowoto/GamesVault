import { GamesStatsDashoard } from "./GamesStatsDashoard";
import { GameContext } from "../context/GamesContext";
import { MainCard } from "./MainCard";
import { useContext } from "react";
import { motion } from "framer-motion";

export const MainDashboard = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const {
    hoursPlayed,
    completedGamesCount,
    playingGamesCount,
    totalGamesCount,
    myGames,
  } = context;

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="w-full min-h-screen bg-bg-card flex flex-col gap-3 sm:gap-5 items-center p-2 sm:p-4"
    >
      <GamesStatsDashoard
        title="Total de Juegos"
        totalGames={totalGamesCount}
      />
      <GamesStatsDashoard
        title="Juegos completados"
        totalGames={completedGamesCount}
      />
      <GamesStatsDashoard
        title="Jugando Actualmente"
        totalGames={playingGamesCount}
      />
      <GamesStatsDashoard title="Tiempo Total" totalTime={hoursPlayed} />
      <section className="w-full  p-2  min-h-screen">
        <div className="w-full h-fit grid grid-cols-1">
          {myGames.map((game) => (
            <MainCard
              key={game.id}
              background_image={game.background_image}
              status={game.status}
              name={game.name}
            />
          ))}
        </div>
      </section>
    </motion.article>
  );
};
