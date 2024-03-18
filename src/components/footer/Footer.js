import React from "react";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="flex justify-center py-[70px] gap-[100px] text-[30px]">
      <span>
        <a href="https://github.com/ijay123">
          <FaGithub />
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/ijeoma-igbokwe-55a441198/">
          <GrLinkedin />
        </a>
      </span>
    </div>
  );
};

export default Footer;
