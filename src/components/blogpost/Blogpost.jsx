import React from "react";
import "./blogpost.css";

export default function Blogpost() {
  return (
    <div>
      <div className="blogpost">
          <span className="blogpostTitle">Latest Blog Post</span>
      <div className="blogPostContainer"> 
          <div className="blogpostContItem">
            <div className="blogpostContainerTitle">What is Lorem ipsum?</div>
            <p className="blogpostContainerDesc">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              eveniet sapiente dolorum sequi nihil reprehenderit nobis unde hic
              facere! Incidunt odio aperiam deleniti accusamus in necessitatibus
              molestiae error ipsam minus. Lorem ipsum dolor sit amet
         
            </p>
            <div className="arrowBody">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
            </div>
          </div>
          <div className="blogpostContItem">
            <div className="blogpostContainerTitle">What is Lorem ipsum?</div>
            <p className="blogpostContainerDesc">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              eveniet sapiente dolorum sequi nihil reprehenderit nobis unde hic
              facere! Incidunt odio aperiam deleniti accusamus in necessitatibus
              molestiae error ipsam minus. Lorem ipsum dolor sit amet
             
            </p>
            <div className="arrowBody">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
            </div>
          </div>
          <div className="blogpostContItem">
            <div className="blogpostContainerTitle">What is Lorem ipsum?</div>
            <p className="blogpostContainerDesc">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              eveniet sapiente dolorum sequi nihil reprehenderit nobis unde hic
              facere! Incidunt odio aperiam deleniti accusamus in necessitatibus
              molestiae error ipsam minus. Lorem ipsum dolor sit amet
             
             
            </p>
            <div className="arrowBody">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
            </div>
          </div>
          </div>   
      </div>
    </div>
  );
}
