import { createContext, useState, useEffect } from "react";
import { fetchGameApi } from "../services/fetchApi";
import { Game } from "../types/types";

interface GameContextType {
  games: Game[];
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

  const value = {
    games,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
