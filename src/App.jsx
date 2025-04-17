import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage ";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CareersPage from "./pages/CareersPage";
import BlogsPage from "./pages/BlogsPage";
import BlogsOpenPage from "./pages/BlogsOpenPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/CareersPage" element={<CareersPage />} />
        <Route path="/BlogsPage" element={<BlogsPage />} />
        <Route path="/BlogsOpenPage" element={<BlogsOpenPage />} />
        <Route path="ProjectsPage" element={<ProjectsPage />} />
        <Route path="ContactPage" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
