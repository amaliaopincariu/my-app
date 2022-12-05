import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerRight">
        <div className="containeFooterIcon">
          {" "}
          <i className="footerIcon fa-brands fa-square-facebook"></i>
        </div>
        <div className="containeFooterIcon">
          <i className="footerIcon fa-brands fa-square-github"></i>
        </div>
        <div className="containeFooterIcon">
          <i className="footerIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="containeFooterIcon">
          <i className="footerIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
      <div className="footerItem">
        <img className="footerImg" src="wcd logo (1).svg" alt="logo" />
      </div>
      <div className="containerFooter"></div>
      
    </div>
  );
}
