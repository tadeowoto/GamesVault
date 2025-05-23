import { MainLayout } from "./layouts/MainLayout";
import GamesGridContainer from "./components/GamesGridContainer";
import { GameProvider } from "./context/GamesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { List } from "./components/List";
import { Reviews } from "./components/Reviews";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <MainLayout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<GamesGridContainer />} />
              <Route path="/List" element={<List />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Reviews" element={<Reviews />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </AnimatePresence>
        </MainLayout>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
