export type status = "completed" | "dropped" | "playing" | "wish";

export type Screenshot = {
  id: number;
  image: string;
};

export type Game = {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  screenshots: Screenshot[];
  status?: status;
};

export type MyGame = {
  id: number;
  name: string;
  background_image: string;
  status: status;
  review?: string;
  progress?: number;
  rating?: number;
  hours?: number;
};
