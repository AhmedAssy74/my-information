import React, { useState } from "react";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Navbar from "./component/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode(e) {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    console.log(darkMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
export default App;
