import React from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Job from "./components/Job";
import Value from "./components/Value";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="md:w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
