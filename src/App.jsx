import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import DragDrop from "./pages/projects/DragDrop";
import LearnUseRef from "./pages/practiceTopics/LearnUseRef";
import learnUseMemo from "./pages/practiceTopics/learnUseMemo";
import LearnUseMemo from "./pages/practiceTopics/learnUseMemo";

function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects/dragdrop" element={<DragDrop />} />
          <Route path="practicetopics/LearnUseRef" element={<LearnUseRef />} />
          <Route path="practicetopics/learnUseMemo" element={<LearnUseMemo />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
