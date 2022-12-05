import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container"></div>
      <div className="headerTitles">
        <span className="headerTitleLg">WDC</span>
        <span className="headerTitleSm">DIGITAL AGENCY</span>
      </div>
      <div class="mouse_scroll">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div>
          <span class="m_scroll_arrows unu"></span>
          <span class="m_scroll_arrows doi"></span>
          <span class="m_scroll_arrows trei"></span>
        </div>
      </div>
    </div>
  );
}
