import { status } from "../types/types";

type Props = {
  background_image: string;
  status: status;
  name: string;
};

export const MainCard = ({ background_image, status, name }: Props) => {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return {
          text: "text-[var(--color-success)]",
          bg: "bg-[var(--color-success)]/20",
        };
      case "playing":
        return {
          text: "text-[var(--color-warning)]",
          bg: "bg-[var(--color-warning)]/20",
        };
      case "dropped":
        return {
          text: "text-[var(--color-error)]",
          bg: "bg-[var(--color-error)]/20",
        };
      default:
        return {
          text: "text-text-primary",
          bg: "bg-text-primary/20",
        };
    }
  };

  return (
    <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto h-auto border border-text-secondary rounded-md mb-4">
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src={background_image}
          alt={name}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="w-full p-4 flex flex-col items-center justify-between gap-3">
        <h1 className="text-xl md:text-2xl">{name}</h1>
        <span
          className={`py-2 px-6 rounded-2xl ${getStatusColor().text} ${
            getStatusColor().bg
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
