import { Navigate, Route, Routes,Link } from "react-router-dom";
import './App.css';
import PageLayout from './pages/PageLayout'
import HomePage from "./pages/HomePage";
import LevelTestPage from "./pages/LevelTestPage"
import LearnPage from "./pages/LearnPage";
import AboutMePage from "./pages/AboutMePage";
function App() {

  return (
    <div className="App">
      <header>
        <nav>
          <Link className="link" to="/home" >HOME</Link>
          <Link className="link" to="/learn" >LEARN</Link>
          <Link className="link" to="/me">ME</Link>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="level-test" element={<LevelTestPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="me" element={<AboutMePage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
