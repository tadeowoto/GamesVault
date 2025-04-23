import { status } from "../types/types";

type Props = {
  image: string;
  status: status;
  valoration?: number;
};

export const MinimalCard = ({ image, status }: Props) => {
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
    <div className="w-full sm:w-40 md:w-48 lg:w-56 h-auto flex flex-col">
      <div className="w-full aspect-[3/4]">
        <img
          src={image}
          alt="Game image"
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="w-full py-2 text-center">
        <span
          className={`${getStatusColor().text} ${
            getStatusColor().bg
          } text-sm md:text-base w-full h-full flex items-center justify-center p-2`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
