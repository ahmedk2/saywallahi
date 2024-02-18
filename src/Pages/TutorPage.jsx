import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AskAyeeyo from "../components/AskAyeeyo/AskAyeeyo";
import Home from "../components/Home/Home";
import JoinButton from "../components/JoinButton/JoinButton";
import Tutor from "../components/Tutor/Tutor";
import SignIn from "../components/SignIn/SignIn";
import SendButton from "../components/SendButton/SendButton";
import BookButton from "../components/BookButton/BookButton";
import Heart2 from "../Icon/Heart2";
import "./style.css";

const TutorPage = () => {

  return (

    <div className="tutors">
      <div className="div-2">
        <div className="overlap">
          <div className="header" />
          <div className="logo">
            <div className="text-wrapper-8">Say Wallahi.</div>
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
        </div>
        <footer className="footer">
          <div className="overlap-2">
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
            <div className="text-wrapper-9">ABOUT</div>
            <div className="text-wrapper-10">HELP</div>
            <div className="text-wrapper-11">MY ACCOUNT</div>
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
        <div className="searching">
          <div className="text-wrapper-12">Online Private Tutors</div>
          <p className="text-wrapper-13">5 Somali Tutors match your needs</p>
        </div>
        <div className="overlap-3">
          <div className="tutor-2">
            <img
              className="img"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d1b0f80ee2fc91abbf413d/img/rectangle-26.png"
            />
            <BookButton className="book-button-instance" />
            <SendButton className="send-button-instance" />
            <img
              className="rating"
              alt="Rating"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d2405636a9e1840e070034/img/rating-@2x.png"
            />
            <Heart2 className="heart" />
          </div>
          <div className="text-wrapper-14">Amina Abdullah</div>
          <p className="element-active-students">
            20 Active Students
            <br />1 pm - 7pm&nbsp;&nbsp;EST
          </p>
          <img
            className="verification"
            alt="Verification"
            src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d2405636a9e1840e070034/img/verification@2x.png"
          />
          <p className="greetings-i-m-amina">
            Greetings, I&#39;m Amina Abdullah, a Somali language professor at the University of Toronto. Through my
            dedication for teaching and profound understanding of Somali culture, embark with me on a journey to explore
            the intricate beauty of the Somali language and its vibrant culture. Let&#39;s learn and grow together.
          </p>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-4">
            <Heart2 className="heart" />
            <img
              className="rectangle-3"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d1b0f80ee2fc91abbf413d/img/rectangle-27@2x.png"
            />
            <BookButton className="book-button-2" />
            <SendButton className="send-button-2" />
            <img
              className="rating-2"
              alt="Rating"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d251f3a068d40e6da5fb51/img/rating--4@2x.png"
            />
            <div className="overlap-group-2">
              <div className="text-wrapper-15">Saeed Farah</div>
              <img
                className="verification-2"
                alt="Verification"
                src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d2405636a9e1840e070034/img/verification@2x.png"
              />
            </div>
            <p className="element-active-students-2">
              15 Active Students
              <br />1 0am - 3pm&nbsp;&nbsp;EST
            </p>
            <p className="hey-there-i-m-saeed">
              Hey there! I&#39;m Saeed, and I&#39;m absolutely passionate about the Somali language. Join me on this
              exciting journey as we dive deep into Somali culture and language together. Let&#39;s make learning Somali
              fun and rewarding - start your adventure with me today!
            </p>
          </div>
        </div>
        <div className="overlap-5">
          <div className="tutor-3">
            <img
              className="img"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d1b0f80ee2fc91abbf413d/img/rectangle-28.png"
            />
            <BookButton className="book-button-3" />
            <SendButton className="send-button-3" />
            <img
              className="verification-3"
              alt="Verification"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d2405636a9e1840e070034/img/verification@2x.png"
            />
            <Heart2 className="heart" />
          </div>
          <img
            className="rating-3"
            alt="Rating"
            src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d251f3a068d40e6da5fb51/img/rating-@2x.png"
          />
          <div className="text-wrapper-16">Fatima Ali</div>
          <p className="element-active-students-3">
            11 Active Students
            <br />3 pm - 5 pm&nbsp;&nbsp;EST
          </p>
          <p className="hey-there-i-m-fatima">
            Hey there, I&#39;m Fatima Ali ! Having grown up in Mogadishu surrounded by the vibrant Somali culture, I
            bring a personal connection to my teaching. Let&#39;s explore the beauty of the Somali language together and
            embark on a journey of cultural discovery.
          </p>
        </div>
        <div className="overlap-6">
          <div className="tutor-3">
            <img
              className="img"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d1b0f80ee2fc91abbf413d/img/rectangle-29.png"
            />
            <BookButton className="book-button-2" />
            <SendButton className="send-button-2" />
            <img
              className="verification-4"
              alt="Verification"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d2405636a9e1840e070034/img/verification@2x.png"
            />
            <Heart2 className="heart" />
          </div>
          <img
            className="rating-4"
            alt="Rating"
            src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d251f3a068d40e6da5fb51/img/rating--1@2x.png"
          />
          <div className="text-wrapper-17">Siyaad Elmi</div>
          <p className="element-active-students-4">
            3 Active Students
            <br />
            9am - 11am&nbsp;&nbsp;EST
          </p>
          <p className="hey-i-m-siyaad-elmi">
            Hey, I&#39;m Siyaad Elmi! Arriving in Canada at the age of 20, I brought with me a passion for my Somali
            roots. With my strong Somali skills honed over years of immersion, I&#39;m excited to share my language
            expertise and cultural insights with you. Let&#39;s embark on a language journey together and unlock the
            richness of Somali heritage!
          </p>
        </div>
        <div className="overlap-7">
          <div className="tutor-3">
            <img
              className="img"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d1b0f80ee2fc91abbf413d/img/rectangle-30.png"
            />
            <BookButton className="book-button-2" />
            <SendButton className="send-button-2" />
            <img
              className="verification-5"
              alt="Verification"
              src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d2405636a9e1840e070034/img/verification@2x.png"
            />
            <Heart2 className="heart" />
          </div>
          <img
            className="rating-5"
            alt="Rating"
            src="https://cdn.animaapp.com/projects/65d13171fb82e0b16879017c/releases/65d251f3a068d40e6da5fb51/img/rating--3@2x.png"
          />
          <div className="text-wrapper-18">Mohamed Abdi</div>
          <p className="element-active-students-5">
            18 Active Students
            <br />
            5pm - 9pm&nbsp;&nbsp;EST
          </p>
          <p className="hey-there-i-m">
            Hey there, I&#39;m Mohamed Abdi, your friendly neighbourhood accountant with a passion for teaching Somali.
            After a day crunching numbers, I find solace in sharing my language skills. It&#39;s my way of giving back
            and connecting with my community, one lesson at a time. Let&#39;s dive into the beauty of Somali togethe !
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorPage 