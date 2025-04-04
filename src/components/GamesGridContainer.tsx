import resolve from "../mocks/resolve.json";

const GamesGridContainer = () => {
  console.log(resolve);

  return (
    <article className="w-full h-full ">
      <div className="w-full h-fit grid grid-cols-3"></div>
    </article>
  );
};

export default GamesGridContainer;
