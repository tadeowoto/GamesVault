type CardProps = {
  background_image?: string;
  name?: string;
  released?: string;
  status?: string;
  title?: string;
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
    <div className="w-60 h-80 border flex flex-col justify-between">
      <div className="w-full h-7/8 bg-accent-muted flex flex-col gap-2">
        <img
          src={background_image}
          alt={title}
          className="w-full object-cover"
        />
        <h1 className="font-sans font-semibold text-xl">{name} NAme</h1>
        <p>{released} decha lanza</p>
      </div>
      <div className="w-full h-1/8">
        <p>{status} aca iria el status</p>
      </div>
    </div>
  );
};
