import { Navigate, Route, Routes,Link } from "react-router-dom";
import './App.css';
import PageLayout from './pages/PageLayout'
import HomePage from "./pages/HomePage";
import LevelTestPage from "./pages/LevelTestPage"
import LearnPage from "./pages/LearnPage";
import AboutMePage from "./pages/AboutMePage";
import ResourcesPage from "./pages/ResourcesPage";
import GeometryPage from "./pages/GeometryPage";
import TwoDShapePage from "./pages/TwoDShapePage";
import Chapter from "./pages/Chapter";
import Chapter1Quiz from "./pages/Chapter1Quiz";
import Chapter1Quiz2 from "./pages/Chapter1Quiz2";

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
            <Route path="/" element={<PageLayout />} >
              <Route index element={<Navigate to="home" replace />} />
              <Route path="home" element={<HomePage />} />
              <Route path="level-test" element={<LevelTestPage />} />
              <Route path="learn" element={<LearnPage />} ></Route>
              <Route path="learn/geometry" element={<GeometryPage />} ></Route>
              <Route path="learn/geometry/2d-shapes" element={<TwoDShapePage/>} >
                <Route path="chapter1" element={<Chapter/>} ></Route>
              <Route path="/learn/geometry/2d-shapes/chapter1/chapter1quiz" element={<Chapter1Quiz/>} ></Route>
              <Route path="/learn/geometry/2d-shapes/chapter1/chapter1quiz/chapter1quiz2" element={<Chapter1Quiz2/>} ></Route>
              </Route>
              <Route path="resources" element={<ResourcesPage />}  />
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
