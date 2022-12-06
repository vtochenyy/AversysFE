import { Route, Routes } from "react-router-dom";
import AutorizedPage from "../../pages/autorizedPage/Autorized";
import MainPage from "../../pages/mainPage/MainPage";
import Page404 from "../../pages/page404/Page404";
import RegisterPage from "../../pages/register/RegisterPage";
import PreviewPage from "../../PreviewPage";

const InfoRoadMap = () => {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<PreviewPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/autorized" element={<AutorizedPage />} />
      <Route path="/mainPage" element={<MainPage />} />
    </Routes>
  );
};

export default InfoRoadMap;
