type Props = {
  image: string;
  review: string;
};

export const ReviewArticle = ({ image, review }: Props) => {
  return (
    <article className="w-full h-40 flex  gap-2  p-1 border-b border-text-secondary ">
      <div className="w-1/3 h-full">
        <img
          src={image}
          alt="game image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 w-2/3">
        <p className="text-sm text-text-secondary">{review}</p>
      </div>
    </article>
  );
};
