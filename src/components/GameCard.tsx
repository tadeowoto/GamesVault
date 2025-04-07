import { Screenshot } from "../types/types";
type CardProps = {
  background_image: string;
  name: string;
  released: string;
  status: string;
  title: string;
  screenshots: Screenshot[];
};

export const GameCard = ({
  background_image,
  name,
  released,
  title,
  status,
}: CardProps) => {
  //TODO HACER EL STATUS CON RENDERIZADOR CONDICIONAL
  return (
    <div className="w-60 h-80  flex flex-col justify-between">
      <div className="w-full h-7/8 flex flex-col gap-2">
        <img
          src={background_image}
          alt={title}
          className="w-full object-cover"
        />
        <h1 className="font-sans font-semibold text-xl">{name}</h1>
        <p>{released}</p>
      </div>
      <div className="w-full h-1/8">
        <p>{status}</p>
      </div>
    </div>
  );
};
