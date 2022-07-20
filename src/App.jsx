import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
