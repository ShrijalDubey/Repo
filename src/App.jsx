import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Cards from "./components/cards";
import Footer from "./components/footerbox";
import EditorNavbar from "./components/EditorNavbar";
import Community from "./components/Community";
import Doubts from "./components/Doubts";

export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Body />
            <Cards />
            <Footer />
          </>
        } />
        <Route path="/editor" element={
          <>
          <Navbar />
          <EditorNavbar />
          </>
          } />
        <Route path="/community" element={
          <>
          <Navbar />
          <Community />
          </>} />
        <Route path="/doubts" element={
          <>
          <Navbar />
          <Doubts />
          </>} />
        <Route path="/profile" element={
          <>
          <Navbar />
          <h1 style={{color:'white'}}>Profile Page</h1>
          </>} />
        <Route path="/login" element={
          <>
          <Navbar />
          <h1 style={{color:'white'}}>Login Page</h1>
          </>
        } />
      </Routes>
    </>
  );
}
