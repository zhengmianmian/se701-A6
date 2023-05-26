import { Navigate, Route, Routes,Link } from "react-router-dom";
import './App.css';
import PageLayout from './pages/PageLayout'
import HomePage from "./pages/HomePage";
import LevelTestPage from "./pages/LevelTestPage"
import LearnPage from "./pages/LearnPage";
import AboutMePage from "./pages/AboutMePage";
import HintPage from "./pages/HintPage"
import ResourcesPage from "./pages/ResourcesPage";
function App() {

  return (
    <div className="App">
      <header>
        <nav>
          <Link className="link" to="/home" >HOME</Link>
          <Link className="link" to="/learn" >LEARN</Link>
          <Link className="link" to="/resources">RESOURCE</Link>
          <Link className="link" to="/me">ME</Link>
          
        </nav>
      </header>
      <main className="main">
        <div className="routes">
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Navigate to="home" replace />} />
              <Route path="home" element={<HomePage />} />
              <Route path="level-test" element={<LevelTestPage />} />
              <Route path="learn" element={<LearnPage />} />
              <Route path="resources" element={<HintPage/>}  />
              <Route path="me" element={<AboutMePage/>} />
            </Route>
          </Routes>
        </div>

        <div className="flower">
          <h3>Your flower</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
