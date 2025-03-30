import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Page404 from "./pages/NotFound";

const App: FC = () => {
  return (
    <>
      <Routes>
          <Route index element={<Portfolio />} />
          <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
