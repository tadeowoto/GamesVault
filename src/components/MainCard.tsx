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
    <div className="w-full h-130  border border-text-secondary rounded-md">
      <div className="w-full h-8/10">
        <img
          src={background_image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full h-2/10  p-3 flex flex-col items-center justify-between">
        <h1 className="text-xl">{name}</h1>
        <span
          className={` py-1 px-18 rounded-2xl ${getStatusColor().text} ${
            getStatusColor().bg
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
