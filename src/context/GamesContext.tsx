import { createContext, useState, useEffect } from "react";
import { fetchGameApi } from "../services/fetchApi";
import { Game } from "../types/types";
import { MyGame } from "../types/types";
import { useMemo } from "react";

interface GameContextType {
  mappedGames: Game[];
  myGames: MyGame[];
  completedGames: MyGame[];
  droppedGames: MyGame[];
  playingGames: MyGame[];
  wishlistGames: MyGame[];
  setMyGames: React.Dispatch<React.SetStateAction<MyGame[]>>;
  hoursPlayed: number;
  setHoursPlayed: React.Dispatch<React.SetStateAction<number>>;
  completedGamesCount: number;
  playingGamesCount: number;
  setCompletedGamesCount: React.Dispatch<React.SetStateAction<number>>;
  setPlayingGamesCount: React.Dispatch<React.SetStateAction<number>>;
  totalGamesCount: number;
  setTotalGamesCount: React.Dispatch<React.SetStateAction<number>>;
  myReviews: MyGame[];
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [games, setGames] = useState<Game[]>([]); // Games del API

  //Juegos del usuario
  const [myGames, setMyGames] = useState<MyGame[]>([]);
  const completedGames = useMemo(
    () => myGames.filter((game) => game.status === "completed"),
    [myGames]
  );
  const droppedGames = useMemo(
    () => myGames.filter((game) => game.status === "dropped"),
    [myGames]
  );
  const playingGames = useMemo(
    () => myGames.filter((game) => game.status === "playing"),
    [myGames]
  );

  const wishlistGames = useMemo(
    () => myGames.filter((game) => game.status === "wish"),
    [myGames]
  );

  //atributos del usuario
  const [hoursPlayed, setHoursPlayed] = useState<number>(0);
  const [totalGamesCount, setTotalGamesCount] = useState<number>(0);
  const [completedGamesCount, setCompletedGamesCount] = useState<number>(0);
  const [playingGamesCount, setPlayingGamesCount] = useState<number>(0);

  const [myReviews, setMyReviews] = useState<MyGame[]>([]); // Reviews del usuario

  //actualizo los contadores de juegos
  useEffect(() => {
    const completedCount = myGames.filter(
      (game) => game.status === "completed"
    ).length;
    const playingCount = myGames.filter(
      (game) => game.status === "playing"
    ).length;

    setCompletedGamesCount(completedCount);
    setPlayingGamesCount(playingCount);
    setTotalGamesCount(myGames.length);
  }, [myGames]);

  //actualizo los juegos que tienen reviews
  useEffect(() => {
    const reviewedGames = myGames.filter((game) => game.review !== "");
    setMyReviews(reviewedGames);
  }, [myGames]);

  //fetch de la data
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
    setMyGames,
    hoursPlayed,
    setHoursPlayed,
    completedGamesCount,
    playingGamesCount,
    totalGamesCount,
    setTotalGamesCount,
    setCompletedGamesCount,
    setPlayingGamesCount,
    myReviews,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
