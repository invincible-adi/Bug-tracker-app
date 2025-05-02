import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bugview from "./Components/Bugview";
import AddBug from "./Components/Addbug";
import EditBug from "./Components/Editbug";
import BugDetails from "./Components/Bugdetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Bugview />} />
        <Route path="/add" element={<AddBug />} />
        <Route path="/edit/:id" element={<EditBug />} />
        <Route path="/bug/:id" element={<BugDetails />} />
      </Routes>
    </Router>
  );
}

export default App;