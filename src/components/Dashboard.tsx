import { GamesStatsDashoard } from "./GamesStatsDashoard";

export const Dashboard = () => {
  //TODO AGREGAR ICONO DE AGREGAR AL BOTON
  //TODO COMPONETIZAR EL DASHBOARD
  return (
    <div className="w-full min-h-screen bg-bg-card flex flex-col gap-5 items-center">
      <header className="w-full h-30  flex flex-col items-center justify-center border-b">
        <h1 className="text-xl text-text-primary mb-2">Dashboard</h1>
        <p className="text-md">Welcome to your games vault</p>
        <button className="py-2 px-4 mt-2 bg-accent-hover rounded-xl">
          Add new game
        </button>
      </header>
      <GamesStatsDashoard title="Total de Juegos" />
      <GamesStatsDashoard title="Juegos completados" />
      <GamesStatsDashoard title="Jugando Actualmente" />
      <GamesStatsDashoard title="Tiempo Total" />
    </div>
  );
};
