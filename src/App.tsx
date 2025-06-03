import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamResults from "./pages/ExamResults";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExamResults />} />
      </Routes>
    </BrowserRouter>
  );
}