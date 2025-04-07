import { GameCard } from "./GameCard";

const GamesGridContainer = () => {
  // TODO : EL TITULO DEBERIA CAMBIAR DEPENDIENDO EL CONTENIDO QUE SE MUESTRE
  //POR EJEMPLO LATEST RELEASES, POPULAR GAMES, ETC
  //TODO: HACER UN GAME TYPE
  // DEBERIA HACER UN CONTEXTO???

  return (
    <article className="w-full h-full flex items-center justify-center ">
      <div className="w-full h-fit p-10 grid grid-cols-1 gap-12 place-items-center bg-bg-card border-t border-gray-600 md:grid-cols-2">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </article>
  );
};

export default GamesGridContainer;
