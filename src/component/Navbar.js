import React from "react";
import assy from "../images/assassins-creed.png";
function Navbar(props) {
  //   const dark = (e) => {
  // e.target.className=""
  //   };
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src={assy} />
      <h3>Assy</h3>
      <a
        href="https://drive.google.com/file/d/1A9fEH3C2QAkhKZ_rDFfGe2y1BsWbr7sd/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
      {/* Toggler */}
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
