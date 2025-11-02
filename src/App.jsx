import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Cards from "./components/cards";
import Footer from "./components/footerbox";
import EditorNavbar from "./components/EditorNavbar";
import Community from "./components/Community";
import Doubts from "./components/Doubts";
import Profile from "./components/Profile";

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
