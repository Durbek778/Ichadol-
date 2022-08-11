import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          target="_blank"
          href="https://instagram.com/2chadol_wiryenewtown?igshid=YmMyMTA2M2Y="
        >
          <InstagramIcon />
        </a>
        <a target="_blank" href="https://pf.kakao.com/_xmwufC">
          <ChatBubbleOutlineIcon />
        </a>
        <a target="_blank" href="https://twitter.com/2chadol">
          <TwitterIcon />
        </a>
        <a target="_blank" href="https://ko-kr.facebook.com/2chadol">
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
