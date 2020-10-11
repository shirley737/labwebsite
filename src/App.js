import React, { useRef } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="website">
      <Header />
      <Banner />
      <Content />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
