import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Sameer4real" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <div>
          <a href="https://www.instagram.com/Sameer04Real/" target="_blank">
            <BsInstagram />
          </a>
        </div>
      </div>
      <div>
        <div>
          <a href="https://www.linkedin.com/in/sameer4real/" target="_blank">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
