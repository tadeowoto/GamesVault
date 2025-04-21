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
    <div className="w-20 h-40 flex flex-col">
      <div className="w-full h-[85%]">
        <img
          src={image}
          alt="Game image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[15%] text-center flex items-center justify-center">
        <span
          className={`${getStatusColor().text} ${
            getStatusColor().bg
          } text-sm w-full h-full flex items-center justify-center`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
