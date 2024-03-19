import NotFound from "./components/404/404"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/home/main"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Main />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
