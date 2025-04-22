import { useContext } from "react";
import { GameContext } from "../context/GamesContext";
import { ReviewArticle } from "./ReviewArticle";

export const Reviews = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GamesGridContainer must be used within a GameProvider");
  }

  const { myReviews } = context;
  console.log(myReviews);
  console.log(typeof myReviews);

  return (
    <section className="w-full min-h-screen bg-bg-card">
      <div className="w-full pb-2 border-b border-text-secondary">
        <h1 className="text-2xl text-center text-text-primary">Reviews</h1>
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        {myReviews.map((review) => (
          <ReviewArticle
            key={review.id}
            review={review.review || ""}
            image={review.background_image}
          />
        ))}
      </div>
    </section>
  );
};
