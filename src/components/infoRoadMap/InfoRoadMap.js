import { Route, Routes } from "react-router-dom";
import App from "../../App";
import AutorizedPage from "../../pages/autorizedPage/Autorized";
import MainPage from "../../pages/mainPage/MainPage";
import Page404 from "../../pages/page404/Page404";
import RegisterPage from "../../pages/register/RegisterPage";

const InfoRoadMap = () => {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/autorized" element={<AutorizedPage />} />
      <Route path="/mainPage" element={<MainPage />} />
    </Routes>
  );
};

export default InfoRoadMap;
