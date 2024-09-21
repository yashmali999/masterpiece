import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

import YASHMALI from "../assets/resume.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/yash-mali-33a44118b/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yashmali999">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/yash_arun_mali/">
          <FaInstagram />
        </a>
        <a href="YASHMALI" download>
          <GrDocumentDownload />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
