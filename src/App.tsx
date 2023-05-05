import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./views/pages/HomePage";
import { DetailPage } from "./views/pages/DetailPage";
import { NotFoundPage } from "./views/pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
