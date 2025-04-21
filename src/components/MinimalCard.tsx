import { status } from "../types/types";

type Props = {
  image: string;
  status: status;
  valoration?: number;
};

export const MinimalCard = ({ image, status }: Props) => {
  //TODO AGREGAR LA VALORACION A CUANDO SE AGREGA UN JUEGO
  return (
    <div>
      <div>
        <img src={image} alt="Game image" />
      </div>
      <div>
        <span>{status}</span>
      </div>
    </div>
  );
};
