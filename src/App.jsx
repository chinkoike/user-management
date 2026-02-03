import { Routes, Route } from "react-router-dom";
import UserPages from "./pages/UserPages";
import UserDetailPage from "./pages/๊UserDetailPage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/users" element={<UserPages />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
    </Routes>
  );
}

export default App;
