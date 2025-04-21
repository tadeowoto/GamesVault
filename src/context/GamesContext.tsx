import { createContext, useState, useEffect } from "react";
import { fetchGameApi } from "../services/fetchApi";
import { Game } from "../types/types";
import { MyGame } from "../types/types";

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
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [games, setGames] = useState<Game[]>([]); // Games del API

  //Juegos del usuario
  const [myGames, setMyGames] = useState<MyGame[]>([
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      status: "completed",
      rating: 9,
      hours: 100,
      review: "Me encanto el juego",
      background_image:
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    },
  ]);
  console.log(games);
  const completedGames = myGames.filter((game) => game.status === "completed");
  const droppedGames = myGames.filter((game) => game.status === "dropped");
  const playingGames = myGames.filter((game) => game.status === "playing");
  const wishlistGames = myGames.filter((game) => game.status === "wish");
  //atributos del usuario
  const [hoursPlayed, setHoursPlayed] = useState<number>(0);

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
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
