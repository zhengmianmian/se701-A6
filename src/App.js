import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import PageLayout from './pages/PageLayout'
import HomePage from "./pages/HomePage";
import LevelTestPage from "./pages/LevelTestPage"
function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="level-test" element={<LevelTestPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
