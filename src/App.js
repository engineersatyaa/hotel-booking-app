import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import HotelList from "./pages/HotelList";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
