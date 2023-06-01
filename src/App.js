import { Navigate, Route, Routes, Link } from "react-router-dom";
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
import Chapter1Quiz3 from "./pages/Chapter1Quiz3";
import MainFlower from "./pages/MainFlower";
import DiscussionPage from "./pages/DiscussionPage";
import HintPage from "./pages/HintPage";
import Reflections from "./pages/Reflections";
import PersonalUnitTest from "./pages/PersonalUnitTest";
import PersonalResult from "./pages/PersonalResult";
import StartPage from "./pages/StartPage";
import Chapter4 from "./pages/two-d-shapes-chapters/Chapter4";
import Chapter3 from "./pages/two-d-shapes-chapters/Chapter3";
import Chapter2 from "./pages/two-d-shapes-chapters/Chapter2";
import Chapter2Quiz1 from "./pages/chapter2quizes/chapter2quiz1"
import Chapter2Quiz2 from "./pages/chapter2quizes/chapter2quiz2";
import Chapter2Quiz3 from "./pages/chapter2quizes/Chapter2Quiz3";


function App() {

  return (
      <div className="App">
        <header>
          <nav>
            <Link className="link" to="/home" >HOME</Link>
            <Link className="link" to="/learn" >LEARN</Link>
            <Link className="link" to="/resources">RESOURCE</Link>
            <Link className="link" to="/me">ME</Link>
            <Link className="link" to="/reflections">REFLECTIONS</Link>

          </nav>
        </header>

        <main className="main">
          <div className="routes">
            <Routes>
              <Route path="/" element={<PageLayout />} >
                <Route index element={<StartPage/>} />
                <Route path="home" element={<HomePage />} />
                <Route path="level-test" element={<LevelTestPage />} />
                <Route path="learn" element={<LearnPage />} ></Route>
                <Route path="learn/geometry" element={<GeometryPage />} ></Route>
                <Route path="learn/geometry/2d-shapes" element={<TwoDShapePage />} >
                  <Route index element={<Navigate to="chapter1" replace />} />
                  <Route path="chapter1" element={<Chapter />} ></Route>
                  <Route path="chapter2" element={<Chapter2 />} ></Route>
                  <Route path="chapter3" element={<Chapter3 />} ></Route>
                  <Route path="chapter4" element={<Chapter4 />} ></Route>
                  <Route path="/learn/geometry/2d-shapes/chapter1/chapter1quiz" element={<Chapter1Quiz />} ></Route>
                  <Route path="/learn/geometry/2d-shapes/chapter1/chapter1quiz/chapter1quiz2" element={<Chapter1Quiz2 />} ></Route>
                  <Route path="/learn/geometry/2d-shapes/chapter1/chapter1quiz/chapter1quiz2/chapter1quiz3" element={<Chapter1Quiz3 />} ></Route>
                  <Route path="/learn/geometry/2d-shapes/chapter2/chapter2quiz" element={<Chapter2Quiz1 />} ></Route>
                  <Route path="/learn/geometry/2d-shapes/chapter2/chapter2quiz2" element={<Chapter2Quiz2 />} ></Route>
                  <Route path="/learn/geometry/2d-shapes/chapter2/chapter2quiz3" element={<Chapter2Quiz3 />} ></Route>
                </Route>
                <Route path="learn/geometry/unittest" element={<Chapter1Quiz />} />
                <Route path="learn/geometry/personaltest/" element={<PersonalUnitTest/>} />
                <Route path="learn/geometry/personaltest/result" element={<PersonalResult />} />
                <Route path="resources" element={<ResourcesPage />} />
                <Route path="me" element={<AboutMePage />} />
                <Route path="reflections" element={<Reflections/>} />
                <Route path="discuss" element={<DiscussionPage />} />
                <Route path="hint" element={<HintPage />} />
              </Route>
            </Routes>
          </div>

          <div className="flower">
            <MainFlower />
          </div>
        </main>
      </div>
  );
}

export default App;
