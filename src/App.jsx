import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Cards from "./components/cards";
import Footer from "./components/footerbox";
import EditorNavbar from "./components/EditorNavbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Body />
            <Cards />
            <Footer />
          </>
        } />
        <Route path="/editor" element={<EditorNavbar />} />
        <Route path="/community" element={<h1 style={{color:'white'}}>Community Page</h1>} />
        <Route path="/doubts" element={<h1 style={{color:'white'}}>Doubts Page</h1>} />
        <Route path="/profile" element={<h1 style={{color:'white'}}>Profile Page</h1>} />
        <Route path="/login" element={<h1 style={{color:'white'}}>Login Page</h1>} />
      </Routes>
    </>
  );
}
