import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footerbox.jsx";
import EditorNavbar from "./components/EditorNavbar.jsx";
import Community from "./components/Community.jsx";
import Doubts from "./components/Doubts.jsx";
import Profile from "./components/Profile.jsx";

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
        <Route path="/editor" element={
          <>
          
          <EditorNavbar />
          </>
          } />
        <Route path="/community" element={
          <>
       
          <Community />
          </>} />
        <Route path="/doubts" element={
          <>
      
          <Doubts />
          </>} />
        <Route path="/profile" element={
          <>
         
          <Profile />
          </>} />
        <Route path="/login" element={
          <>
         
          <h1 style={{color:'white'}}>Login Page</h1>
          </>
        } />
      </Routes>
    </>
  );
}
