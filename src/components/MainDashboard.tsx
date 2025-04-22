import { GamesStatsDashoard } from "./GamesStatsDashoard";
import { GameContext } from "../context/GamesContext";
import { MainCard } from "./MainCard";
import { useContext } from "react";

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
    <article className="w-full min-h-screen bg-bg-card flex flex-col gap-5 items-center">
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
    </article>
  );
};
