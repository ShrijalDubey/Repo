import React from "react";
import EditorNavbar from "./components/EditorNavbar";
import Footer from "./components/footerbox";
import Navbar from "./components/navbar";
import Cards from "./components/cards";
import Body from "./components/body";


export default function App() {
  return (
    <>
    <Navbar />
    <Body />
    <Cards />
    <Footer />
    <EditorNavbar />
    </>
  );
}
