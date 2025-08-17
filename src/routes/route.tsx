import DefaultPage from "@/page/default";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const RoutePages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
};
