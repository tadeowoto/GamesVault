import { createContext, useState, useEffect } from "react";
import { fetchGameApi } from "../services/fetchApi";
import { Game } from "../types/types";

interface GameContextType {
  mappedGames: Game[];
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [games, setGames] = useState([]);

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

  const value = {
    mappedGames,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
