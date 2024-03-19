import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Hotel from "./components/Hotel";
import Login from "./components/Login";
import Pages from "./components/Pages";
import Tours from "./components/Tours";
import Signup from "./components/signup";
import NotFound from "./err/NotFound";
import Blogrender from "./pages/Blogrender";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blogrender />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tours" element={<Tours />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
