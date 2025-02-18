import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Available_tests from "./pages/available_tests";
import Result from "./pages/result";
import Profile from "./pages/profile";
import Testinterface from "./pages/testinterface";
import Testinstructions from "./pages/Testinstructions";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test_instructions" element={<Testinstructions />} />
        <Route path="/test_interface" element={<Testinterface />} />
        {/* Dashboard with Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="available_tests" element={<Available_tests />} />
          <Route path="result" element={<Result />} />
          <Route path="profile" element={<Profile />} />
          <Route path="test_interface" element={<Testinterface />} />
          <Route path="test_instructions" element={<Testinstructions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
