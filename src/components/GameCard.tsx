import { Screenshot } from "../types/types";
import { StarIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
type CardProps = {
  background_image: string;
  name: string;
  released: string;
  status?: string;
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-60 h-80 flex flex-col justify-between border border-text-secondary rounded-md"
    >
      <div className="w-full h-7/8 flex flex-col gap-2">
        <img
          src={background_image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <h1 className="font-sans font-semibold text-xl text-center text-text-primary">
          {name}
        </h1>
        <div className="w-full h-fit flex items-center justify-between p-2">
          <p className="text-text-secondary">{released}</p>
          <div className="flex gap-1">
            <span className="text-yellow-400">{rating}</span>
            <StarIcon className="h-5 w-5 text-yellow-400" />
          </div>
        </div>
      </div>
      {status ? (
        <div className="w-full h-1/8 flex items-center justify-center border-t mt-3">
          <p>{status}</p>
        </div>
      ) : null}
    </motion.div>
  );
};
