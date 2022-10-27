import React from "react";
import "./singlePost.css";

export default function SinlgePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="14051642_1206971362659428_6879347595016222352_n.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Amalia</b>
          </span>
          <span className="singlePostDate">1 h ago</span>
        </div>
        <p className="sinlgePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iste
          hic. Aliquid id minus quas exercitationem rem quia nesciunt labore
          voluptate totam aspernatur, ipsa delectus. Laboriosam repellat ipsam
          dignissimos fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iste
          hic. Aliquid id minus quas exercitationem rem quia nesciunt labore
          voluptate totam aspernatur, ipsa delectus. Laboriosam repellat ipsam
          dignissimos fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iste
          hic. Aliquid id minus quas exercitationem rem quia nesciunt labore
          voluptate totam aspernatur, ipsa delectus. Laboriosam repellat ipsam
          dignissimos fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iste
          hic. Aliquid id minus quas exercitationem rem quia nesciunt labore
          voluptate totam aspernatur, ipsa delectus. Laboriosam repellat ipsam
          dignissimos fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iste
          hic. Aliquid id minus quas exercitationem rem quia nesciunt labore
          voluptate totam aspernatur, ipsa delectus. Laboriosam repellat ipsam
          dignissimos fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iste
          hic. Aliquid id minus quas exercitationem rem quia nesciunt labore
          voluptate totam aspernatur, ipsa delectus. Laboriosam repellat ipsam
          dignissimos fugit.
        </p>
      </div>
    </div>
  );
}
