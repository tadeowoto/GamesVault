import { createContext } from "react";

interface GameContextType {
  a: number;
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const a = 2;
  console.log(a);

  const value = { a };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
