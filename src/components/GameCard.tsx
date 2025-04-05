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
  return (
    <div className="bg-accent-hover w-60 h-80">
      <img
        src={background_image}
        alt={title}
        className="w-full h-1/2 object-cover"
      />
      <h1>{name}</h1>
      <p>{released}</p>
      <div>
        <p>{status}</p>
      </div>
    </div>
  );
};
