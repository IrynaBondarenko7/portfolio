import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { HireMe } from "../pages/HireMe";
import { Contacts } from "../pages/Contacts";

export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/hireme" element={<HireMe />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};
