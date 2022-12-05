import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div class="profile_card">
        <div class="user_img">
            <img src="images.png" height="100" width="100" alt="profile"/>
        </div>
        <div class="user_details">
            <h5>Servicii WEB</h5>
            <span>Web Development</span>
            <p>Creeare website de prezentare e-commerce</p>
        </div>
        </div>
    </div>
  );
}
