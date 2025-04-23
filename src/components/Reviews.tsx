import { useContext } from "react";
import { GameContext } from "../context/GamesContext";
import { ReviewArticle } from "./ReviewArticle";
import { motion } from "framer-motion";

export const Reviews = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const { myReviews } = context;
  console.log(myReviews);
  console.log(typeof myReviews);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8"
    >
      <div className="w-full pb-4 mb-6 border-b border-text-secondary">
        <h1 className="text-2xl md:text-3xl text-center text-text-primary">
          Reviews
        </h1>
      </div>
      <div className="w-full grid gap-6 md:gap-8">
        {myReviews.map((review) => (
          <ReviewArticle
            key={review.id}
            review={review.review || ""}
            image={review.background_image}
          />
        ))}
      </div>
    </motion.section>
  );
};
