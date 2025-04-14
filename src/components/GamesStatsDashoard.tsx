type Props = {
  title: string;
  totalGames?: number;
  totalTime?: number;
};

export const GamesStatsDashoard = ({ title, totalGames, totalTime }: Props) => {
  //TODO AGREGAR ICONO DE CADA SECCION
  return (
    <article className="w-10/11 h-30 bg-transparent border border-gray-700 p-4 rounded-xl flex">
      <div className="flex flex-col gap-3">
        <h1>{title}</h1>
        {totalGames ? (
          <h2 className="text-3xl font-bold tracking-wide">{totalGames}</h2>
        ) : (
          <h2 className="text-3xl font-bold tracking-wide">{totalTime}</h2>
        )}
      </div>
    </article>
  );
};
