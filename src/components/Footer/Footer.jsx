import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span> NAME: MD ASMATH SHAIKH</span>
        <span>Email-id: mdasmath1998@gmail.com</span>
        <span>PH NO: +91 8512985998</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/milton.shaikh.79/" target="_blank" rel="noreferrer">
          <Insta color="white" size={"3rem"} />
        </a>
        <a href="https://www.facebook.com/milton.shaikh.79" target="_blank" rel="noreferrer">
          <Facebook color="white" size={"3rem"} />
        </a>
        <a href="https://github.com/mdasmath2141" target="_blank" rel="noreferrer">
          <Gitub color="white" size={"3rem"} />
        </a>
        <a href="https://www.linkedin.com/in/md-asmath-shaikh-697a961a9/" target="_blank" rel="noreferrer">
          <Linkedin color="white" size={"3rem"} />
        </a>
        <a href="https://x.com/mdasmath2141" target="_blank" rel="noreferrer" key="twitter">
          <Twitter color="white" size={"3rem"} />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
