import { MainLayout } from "./layouts/MainLayout";
import GamesGridContainer from "./components/GamesGridContainer";
import { GameProvider } from "./context/GamesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<GamesGridContainer />} />
            <Route path="/List" element={<h1>My Lists</h1>} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Reviews" element={<h1>revies</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </MainLayout>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
