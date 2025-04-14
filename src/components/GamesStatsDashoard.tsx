type Props = {
  title: string;
  totalGames?: number;
  totalTime?: number;
};

export const GamesStatsDashoard = ({ title, totalGames, totalTIme }: Props) => {
  return (
    <article className="w-10/11 h-30 bg-accent-hover rounded-xl">
      <div></div>
    </article>
  );
};
