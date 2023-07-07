import { Route, Routes, Navigate } from "react-router-dom";
import Home from "src/pages/home";
import { Layout } from "src/components/organisms";
import Favorites from "src/pages/favorites";

const RouteLists = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Route>
    </Routes>
  );
};

export default RouteLists;
