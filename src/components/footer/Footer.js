import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
// import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        {/* <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by Himanshu
        </p>
        <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/>
         */}
         <div id="four">
            <div id="ficon">
                <div id="lfticon"></div>
                <h2>Let's get <span>to know</span></h2>
            </div>
            <div id="fline" class="line">
                <div class="hrline"></div>
            </div>
            <div id="getintouch">
                <h1>Contact Me</h1>
            </div>
            <div id="buttons">
                <div id="fleftbtn">
                    <a href="/">nirajrathod806@gmail.com</a>
                </div>
                <div id="frightbtn">
                    <a href="/">+91 8847787650</a>
                </div>
            </div> 
        </div>
      </Fade>
    </div>
  );
}
