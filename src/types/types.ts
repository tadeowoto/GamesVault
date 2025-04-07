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
};
