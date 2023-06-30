import React, { useContext } from "react";
import Home from "./Components/pages/home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Singlepage from "./Components/pages/Singlepage/Singlepage.jsx";
import Writepage from "./Components/pages/Writepage/Writepage.jsx";
import Updatepage from "./Components/pages/Updatepage/Updatepage.jsx";
import Loginpage from "./Components/pages/Loginpage/Loginpage.jsx";
import Registerpage from "./Components/pages/Registerpage/Registerpage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context.js";

export default function App() {
  const { user } = useContext(Context);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Registerpage />} />

        <Route path="/register" element={user ? <Home /> : <Registerpage />} />
        <Route path="/login" element={user ? <Home /> : <Loginpage />} />
        <Route path="/write" element={user ? <Writepage /> : <Loginpage />} />
        <Route
          path="/settings"
          element={user ? <Updatepage /> : <Loginpage />}
        />
        <Route path="/post/:postId" element={<Singlepage />} />
      </Routes>
    </Router>
  );
}
