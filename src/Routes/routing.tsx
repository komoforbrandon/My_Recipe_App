import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Favorite from "../components/favorite";
import About from "../components/about";

export default function Routing() {
    return (
        <main className="flex-1 min-h-screen overflow-auto">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorite />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    )
}
