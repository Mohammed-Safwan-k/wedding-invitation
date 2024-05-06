// import top from "../top.png";
import React from "react";
import "./App.css";
import "@dotlottie/player-component/dist/dotlottie-player.mjs";

function App() {
  return (
    <div className="App">
      <img src="../images/top.png" className="top-image image-web" alt="logo" />
      <img
        src="../images/top-mobile.png"
        className="top-image image-mobile"
        alt="logo"
      />
      <div className="first-content">
        <div className="image">
          <dotlottie-player
            src="https://lottie.host/259c7c59-bc54-4f4f-b4e2-1b323e01d822/FbvqyO0h6N.json"
            background="transparent"
            speed="0.5"
            loop
            autoplay
            // style={{ width: "300px", height: "300px" }}
          ></dotlottie-player>
        </div>
        <div className="image couple-image">
          <img src="../images/couple.png" alt="logo" />
          <div className="love-animation">
            <dotlottie-player
              src="https://lottie.host/fef0920b-9fc1-46a4-a78d-e111c7326eaa/yUgl0CjekB.json"
              background="transparent"
              speed="0.5"
              // style="width: 300px; height: 300px;"
              loop
              autoplay
            ></dotlottie-player>
          </div>

          <div className="name-text">S & S</div>
        </div>
      </div>
      <div className="second-content">
        <img
          className="image-web"
          src="../images/background-one.png"
          alt="logo"
        />
        <img
          className="image-mobile"
          src="../images/background-mobile-one.png"
          alt="logo"
        />
        <div className="butterfly-animation">
          <dotlottie-player
            src="https://lottie.host/1b809a1c-77bd-40bc-8d66-743dde4aab00/c1AX8VYcn8.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="name-container">
          <div className="full-name">Mohammed Safwan</div>
          <div className="weds-text">Weds</div>
          <div className="full-name">Shaniya</div>
        </div>
      </div>
      <div className="third-content"></div>
    </div>
  );
}

export default App;
