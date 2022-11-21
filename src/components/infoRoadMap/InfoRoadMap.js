import { Route, Routes } from "react-router-dom";
import App from "../../App";
import AutorizedPage from "../../pages/autorizedPage/Autorized";
import MainPage from "../../pages/mainPage/MainPage";
import RegisterPage from "../../pages/register/RegisterPage";

const InfoRoadMap = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/autorized" element={<AutorizedPage />} />
      <Route path="/mainPage" element={<MainPage />} />
    </Routes>
  );
};

export default InfoRoadMap;
