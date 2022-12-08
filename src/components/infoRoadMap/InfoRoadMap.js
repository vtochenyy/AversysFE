import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";

const InfoRoadMap = () => {
  const Autorized = lazy(() => import("../../pages/autorizedPage/Autorized"));
  const MainPage = lazy(() => import("../../pages/mainPage/MainPage"));
  const RegisterPage = lazy(() => import("../../pages/register/RegisterPage"));
  const PreviewPage = lazy(() => import("../../PreviewPage"));
  const Page404 = lazy(() => import("../../pages/page404/Page404"));
  return (
    <Routes>
      {/* <Route path="*" element={<Page404 />} /> */}
      <Route
        path="*"
        element={
          <React.Suspense fallback={<>...</>}>
            <Page404 />
          </React.Suspense>
        }
      />
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <PreviewPage />
          </React.Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <React.Suspense fallback={<>...</>}>
            <RegisterPage />
          </React.Suspense>
        }
      />
      <Route
        path="/autorized"
        element={
          <React.Suspense fallback={<>...</>}>
            <Autorized />
          </React.Suspense>
        }
      />
      <Route
        path="/mainPage"
        element={
          <React.Suspense fallback={<>...</>}>
            <MainPage />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default InfoRoadMap;
