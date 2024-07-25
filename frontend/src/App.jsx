import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
