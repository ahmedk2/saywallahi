import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AskAyeeyo from "../components/AskAyeeyo/AskAyeeyo";
import Home from "../components/Home/Home";
import JoinButton from "../components/JoinButton/JoinButton";
import Tutor from "../components/Tutor/Tutor";
import SignIn from "../components/SignIn/SignIn";
import "./style.css";

const HomePage = () => {

  return (

    <div className="home-page">
      <div className="div-2">
        <div className="overlap">
          <img
            className="img"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d1b0f80ee2fc91abbf413d/img/rectangle-2.svg"
          />
          <div className="search-bar">
            <div className="rectangle-2" />
          </div>
          <div className="header" />
          <div className="logo">
            <div className="text-wrapper-6">Say Wallahi.</div>
          </div>
          <div className="navigation-bar">
            <SignIn className="sign-in-instance" />
            <AskAyeeyo className="ask-ayeeo-instance" />
            <Tutor className="tutor-instance" />
            <AboutUs className="about-us-instance" />
            <Home className="home-instance" />
            <JoinButton
              className="join-button-instance"
              divClassName="design-component-instance-node"
              rectangleClassName="join-button-2"
            />
          </div>
          <div className="center">
            <div className="overlap-2">
              <div className="search-bar-2">
                <div className="group">
                  <p className="p">Find the Right Tutor for You</p>
                </div>
                <img
                  className="vector"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d181e9a068d40e6da5f85e/img/vector-1-1.svg"
                />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse" />
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d181e9a068d40e6da5f85e/img/vector-2-1.svg"
                    />
                  </div>
                </div>
              </div>
              <img
                className="star"
                alt="Star"
                src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d21bbfb4c46e945eeab937/img/star.svg"
              />
            </div>
          </div>
          <div className="text-wrapper-7">Search</div>
        </div>
        <div className="overlap-3">
          <div className="our-mission">
            <div className="overlap-4">
              <div className="overlap-group-3">
                <div className="frame">
                  <div className="text-wrapper-8">Our Mission</div>
                  <p className="text-wrapper-9">
                    Our mission is to foster the growth and preservation of the Somali language by connecting members of
                    the Somali diaspora with proficient speakers. We aim to create a vibrant online community where
                    individuals passionate about Somali language and culture can come together to learn, practice, and
                    celebrate their linguistic heritage. Through our platform, we strive to empower Somali communities
                    worldwide to preserve their language, strengthen cultural ties, and contribute to the continued
                    prosperity of the Somali linguistic tradition.
                  </p>
                </div>
                <img
                  className="map"
                  alt="Map"
                  src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d181e9a068d40e6da5f85e/img/vector-2.svg"
                />
              </div>
              <img
                className="rectangle-3"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d191d76874a4ca3e864da3/img/rectangle-9@2x.png"
              />
            </div>
          </div>
          <img
            className="vector-3"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d1b0f80ee2fc91abbf413d/img/vector-12.svg"
          />
        </div>
        <footer className="footer">
          <div className="overlap-5">
            <div className="rectangle-4" />
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
            <div className="text-wrapper-10">ABOUT</div>
            <div className="text-wrapper-11">HELP</div>
            <div className="text-wrapper-12">MY ACCOUNT</div>
            <div className="sign-in-register">
              Sign in
              <br />
              Register
              <br />
              Schedule
            </div>
            <p className="text-wrapper-13">© 2020 Say Wallahi. All Rights Reserved</p>
          </div>
        </footer>
        <div className="levels">
          <div className="overlap-6">
            <div className="overlap-wrapper">
              <div className="overlap-7">
                <div className="rectangle-5" />
                <div className="beginner">
                  <div className="overlap-group-4">
                    <div className="rectangle-6" />
                    <img
                      className="vector-4"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d21bbfb4c46e945eeab937/img/vector-6.svg"
                    />
                  </div>
                </div>
                <div className="intermidate">
                  <div className="overlap-group-4">
                    <div className="rectangle-6" />
                    <img
                      className="vector-5"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d21bbfb4c46e945eeab937/img/vector-6.svg"
                    />
                    <img
                      className="vector-6"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d21bbfb4c46e945eeab937/img/vector-6.svg"
                    />
                  </div>
                </div>
                <div className="fluent">
                  <div className="overlap-8">
                    <div className="rectangle-7" />
                    <img
                      className="vector-7"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d21bbfb4c46e945eeab937/img/vector-6.svg"
                    />
                    <img
                      className="vector-4"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d21bbfb4c46e945eeab937/img/vector-6.svg"
                    />
                    <img
                      className="vector-8"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d21bbfb4c46e945eeab937/img/vector-6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-14">Beginner</div>
            <div className="text-wrapper-15">Intermediate</div>
            <div className="text-wrapper-16">Advanced</div>
            <p className="introduction-to">
              Introduction to basic vocabulary and grammar.
              <br />
              Learning essential phrases for everyday communication.
              <br />
              Developing basic conversation skills.
            </p>
            <p className="expansion-of">
              Expansion of vocabulary and grammar knowledge.
              <br />
              Ability to engage in more complex conversations and activities.
              <br />
              Improving reading and listening comprehension skills.
            </p>
            <p className="complex-discussions">
              Complex discussions
              <br />
              Refinement of language skills, including vocabulary, grammar, and pronunciation.
              <br />
              Exploration of cultural nuances and deeper understanding of the language.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage