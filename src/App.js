import "./App.css";
import TopBar from "./components/TopBar";
import "./css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import ManagePage from "./components/ManagePage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar className="nav-bar" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="dash-board" element={<DashboardPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="manage-zone" element={<ManagePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
