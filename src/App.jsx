import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Orders from "./pages/Orders.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/kitchen" element={<Kitchen />} />
      </Routes>
    </Router>
  );
}

export default App;