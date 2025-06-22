import { useState } from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
