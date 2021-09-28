import React from "react";
import "../content/content.css";

const Content = () => {
  return (
    <div className='content'>
      <div className='content-heading'>
        <h1>I <span><i class="fa fa-heart" ></i></span> Color</h1>
      </div>
      <div className='content-middle'>
        <p>
          Color isn't that difficult to get it right,If you know where to
          start.Learn by doing and you will be master in no time.
        </p>             
      </div>

      <div className="btn">
          <button>Over to you</button>
      </div>
    </div>
  );
};

export default Content;
