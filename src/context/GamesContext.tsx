import { createContext, useState, useEffect } from "react";
import { fetchGameApi } from "../services/fetchApi";
import { Game } from "../types/types";

interface GameContextType {
  mappedGames: Game[];
  myGames: Game[];
  completedGames: Game[];
  droppedGames: Game[];
  playingGames: Game[];
  wishlistGames: Game[];
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [games, setGames] = useState<Game[]>([]); // Add type annotation here
  const [myGames] = useState<Game[]>([]);
  const completedGames = myGames.filter((game) => game.status === "completed");
  const droppedGames = myGames.filter((game) => game.status === "dropped");
  const playingGames = myGames.filter((game) => game.status === "playing");
  const wishlistGames = myGames.filter((game) => game.status === "wish");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchGameApi();
      setGames(result);
    };

    fetchData();
  }, []);

  const mappedGames = games.map((game: Game) => {
    const newGame = {
      id: game.id,
      background_image: game.background_image,
      name: game.name,
      released: game.released,
      rating: game.rating,
      screenshots: game.screenshots,
    };
    return newGame;
  });

  const value: GameContextType = {
    mappedGames,
    myGames,
    completedGames,
    droppedGames,
    playingGames,
    wishlistGames,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
