import { Routes, Route, Navigate } from "react-router-dom";
import UserPages from "./pages/UserPages";
import UserDetailPage from "./pages/๊UserDetailPage";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./Layouts/Layout";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserPages />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
