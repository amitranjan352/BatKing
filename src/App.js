import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import MobileLogin from "./components/login/MobileLogin";
import RegistrationPage from "./components/login/RegistrationPage";
import SignupPage from "./components/login/SignupPage";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<MobileLogin />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
