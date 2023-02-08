import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Pages/Create/Create";
import Edit from "./Pages/Edit/Edit";
import Hello from "./Pages/Hello/Hello";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
