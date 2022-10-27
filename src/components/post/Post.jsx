import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="14051642_1206971362659428_6879347595016222352_n.jpg"
        alt="postimg"
      />
      <div className="postInfo">
        <div className="postcats">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 h ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur  elit. Veritatis,
        impedit minus, pariatur magni saepe molestiae provident non sint a nemo
        facere officia temporibus error quasi. Illum enim laboriosam suscipit
        nostrum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        impedit minus, pariatur magni saepe molestiae provident non sint a nemo
        facere officia temporibus error quasi. Illum enim laboriosam suscipit
        nostrum?
      </p>
    </div>
  );
}
