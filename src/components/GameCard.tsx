import { Screenshot } from "../types/types";
type CardProps = {
  background_image: string;
  name: string;
  released: string;
  status: string;
  title: string;
  screenshots: Screenshot[];
  rating: number;
};

export const GameCard = ({
  background_image,
  name,
  released,
  title,
  status,
  rating,
}: CardProps) => {
  //TODO HACER EL STATUS CON RENDERIZADOR CONDICIONAL
  return (
    <div className="w-60 h-80  flex flex-col justify-between border p-1 border-slate-400">
      <div className="w-full h-7/8 flex flex-col gap-2">
        <img
          src={background_image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <h1 className="font-sans font-semibold text-xl text-center text-text-primary">
          {name}
        </h1>
        <div className="w-full h-fit flex items-center justify-between">
          <p className="text-text-secondary">{released}</p>
          <span className="text-yellow-400">{rating}</span>
        </div>
      </div>
      <div className="w-full h-1/8 flex items-center justify-center border-t mt-3 border-slate-400">
        <p>{status}</p>
      </div>
    </div>
  );
};
