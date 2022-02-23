import React from "react";
// import { FaBeer } from "react-icons/fa";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillPhone } from "@react-icons/all-files/ai/AiFillPhone";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <a href="https://linkedin.com/in/ahmed-assy-336a31229" target="_blank">
        <AiFillLinkedin className="icon" />
      </a>
      <a href="https://github.com/AhmedAssy74" target="_blank">
        <AiFillGithub className="icon" />
      </a>
      <a href="mailto:assyofficial74@gmail.com">
        <AiOutlineMail className="icon" />
      </a>
      <a href="tel:01095681252">
        <AiFillPhone className="icon" />
      </a>
      {/* <a href="../images/myCv.pdf" target="_blank" title="01095681252">
        This is a link
      </a> */}
    </footer>
  );
}

export default Footer;
