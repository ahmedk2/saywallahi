import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AskAyeeyo from "../components/AskAyeeyo/AskAyeeyo";
import Home from "../components/Home/Home";
import JoinButton from "../components/JoinButton/JoinButton";
import Tutor from "../components/Tutor/Tutor";
import SignIn from "../components/SignIn/SignIn";
import "./style.css";


const AskAyeeyoPage = () => {


  return (
    <div className="ask-ayeeyo">
      <div className="div-2">
        <header className="header">
          <div className="logo">
            <div className="text-wrapper-6">Say Wallahi.</div>
          </div>
          <div className="navigation-bar">
            <SignIn className="sign-in-instance" />
            <AskAyeeyo className="ask-ayeeo-instance" divClassName="design-component-instance-node" />
            <Tutor className="tutor-instance" />
            <AboutUs className="about-us-instance" divClassName="about-us-2" />
            <Home className="home-instance" />
            <JoinButton
              className="join-button-instance"
              divClassName="join-button-2"
              rectangleClassName="join-button-3"
            />
          </div>
        </header>
        <footer className="footer">
          <div className="overlap">
            <div className="rectangle-2" />
            <div className="FAQ-services-privacy">
              FAQ
              <br />
              Services
              <br />
              Privacy Policy
            </div>
            <p className="the-team-mission">
              The Team
              <br />
              Mission Statement <br />
              Become a Tutor
            </p>
            <div className="text-wrapper-7">ABOUT</div>
            <div className="text-wrapper-8">HELP</div>
            <div className="text-wrapper-9">MY ACCOUNT</div>
            <div className="sign-in-register">
              Sign in
              <br />
              Register
              <br />
              Schedule
            </div>
            <p className="p">© 2020 Say Wallahi. All Rights Reserved</p>
          </div>
        </footer>
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="text-wrapper-10">Ahmed Hassan</div>
            <img
              className="ellipse"
              alt="Ellipse"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d251f3a068d40e6da5fb51/img/ellipse-3@2x.png"
            />
          </div>
          <div className="overlap-4">
            <img
              className="vector"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d2597f782215609f2deeac/img/vector-16.svg"
            />
            <div className="new-chat">
              <img
                className="img"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d2597f782215609f2deeac/img/vector-17.svg"
              />
              <div className="div-wrapper">
                <div className="text-wrapper-11">New Chat</div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-bar">
          <div className="overlap-5">
            <div className="overlap-wrapper">
              <div className="group-wrapper">
                <div className="group">
                  <div className="overlap-group-2">
                    <div className="ellipse-2" />
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d251f3a068d40e6da5fb51/img/vector-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-12">Ask Ayeeyo...</div>
          </div>
        </div>
        <div className="div-3">
          <p className="text-wrapper-13">How Can Ayeeyo Help You Today?</p>
          <img
            className="ellipse-3"
            alt="Ellipse"
            src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d251f3a068d40e6da5fb51/img/ellipse-2@2x.png"
          />
        </div>
        <div className="prompts">
          <div className="overlap-6">
            <div className="text-wrapper-14">Define a word..</div>
            <div className="text-wrapper-15">What does ‘bood’ mean</div>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-16">July 1, 1960</div>
            <div className="text-wrapper-17">When was Somalia Founded</div>
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-18">Buraanbur</div>
            <div className="text-wrapper-19">What is a..</div>
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-20">How to make...</div>
            <div className="text-wrapper-21">Malawah</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAyeeyoPage