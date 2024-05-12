// import top from "../top.png";
import React, { useEffect, useState } from "react";
import "./App.css";
import "@dotlottie/player-component/dist/dotlottie-player.mjs";

function App() {
  const targetDate = new Date("May 16, 2024 12:00:00");
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="main">
      <img src="../images/top.png" className="top-image hide-in-mobile" alt="logo" />
      <img
        src="../images/top-mobile.png"
        className="top-image show-in-mobile-only"
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
          ></dotlottie-player>
        </div>
          <div className="image couple-image">
            <img src="../images/couple.png" alt="logo" />
            <div className="love-animation">
              <dotlottie-player
                src="https://lottie.host/fef0920b-9fc1-46a4-a78d-e111c7326eaa/yUgl0CjekB.json"
                background="transparent"
                speed="0.5"
                loop
                autoplay
              ></dotlottie-player>
            </div>

            <div className="name-text">S & S</div>
          </div>
      </div>
      <div className="second-content">
        <img
          className="hide-in-mobile"
          src="../images/background-one.png"
          alt="logo"
        />
        <img
          className="show-in-mobile-only"
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
      <div className="third-content">
        <div className="invitation">
          <div className="invite">Request The Honour Of Your</div>
          <div className="invite">Presence And Prayer With Family On </div>
          <div className="invite">The Auspicious Occasion Of</div>
          <div className="invite">The Wedding Reception</div>
          <div>
            <img
              className="wedding-ring"
              src="../images/wedding-ring.png"
              alt="ring"
            />
          </div>
        </div>
      </div>
      <div className="fourth-content">
        <div className="reception" style={{marginBottom:'20px'}}>Reception</div>
        <div className="day" style={{marginBottom:'50px'}}>
        <div class="date">2024 May</div>
        <div className="day-date">16</div>
        <div class="date">Thu 12:00 PM</div>
        </div>
        <div className="reception">Venue : Pookolathur Manhal</div>
        <div className="reception">Auditorium, Pookolathur, Manjeri</div>
        <button className="custom-button">
          Get Route &rarr;
        </button>
      </div>
      <div className="fifth-content">
      <div className="count-text">Days Left</div>
      <div className="countdown-style">
            <div className="theme1">
              <div className="countTimer">
              <span>{timeLeft.days ?? 0}</span> <span>Days</span>
            </div>
            <div style={{color:'#000'}}>:</div>
            <div className="countTimer">
              <span>{timeLeft.hours ?? 0}</span> <span>Hours</span>
            </div>
            <div style={{color:'#000'}}>:</div>
            <div className="countTimer">
              <span>{timeLeft.minutes ?? 0}</span> <span>Minutes</span>
            </div>
            <div style={{color:'#000'}}>:</div>
            <div className="countTimer">
              <span>{timeLeft.seconds ?? 0}</span> <span>Seconds</span>
            </div>
            </div>
          </div>
      </div>
      <div className="sixth-content">
      <div className="end">We Joyfully Invite You To The  Wedding Of</div>
      <div className="end">Muhammed Safwan & Shaniya.</div>
      <div className="end">Together With Our Families & Friends</div>
      </div>
    </div>
  );
}

export default App;
