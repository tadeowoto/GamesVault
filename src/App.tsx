import { MainLayout } from "./layouts/MainLayout";
import GamesGridContainer from "./components/GamesGridContainer";
import { GameProvider } from "./context/GamesContext";

function App() {
  return (
    <GameProvider>
      <MainLayout>
        <GamesGridContainer />
      </MainLayout>
    </GameProvider>
  );
}

export default App;
