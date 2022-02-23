import React from "react";

function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="title">My Information</h1>
      <ul className="info">
        <li>My name is ahmed khaled assy</li>
        <li>
          Graduated from faculty of computer and artificial intelligence,
          <span className="university">benha university 2021</span>
        </li>
        <li>
          I have a firm knowledge of html, css, javaScript language ,react.js
          and version control (git).
        </li>
        <li>My skills :</li>
        <li className="my-skills">
          <ul className="tech skills">
            <h4>Technical Skills :</h4>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Version Control (GIT) </li>
          </ul>
          <ul className="soft skills">
            <h4>Personal Skills :</h4>
            <li>Team Work</li>
            <li>Self Motivated</li>
            <li>Work Under Stress</li>
            <li>Communication Skills</li>
            <li>Time Management Skills</li>
          </ul>
        </li>
      </ul>
    </main>
  );
}

export default Main;
