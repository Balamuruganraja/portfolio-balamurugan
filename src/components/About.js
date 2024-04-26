import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Bala murugan" },
    { id: 2, title: "Email:", text: "balamuruganraja0106@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9514778271" },
  ]);
  return (
    <div className="about">
      <div className="contain">
        <div className="common padTop30">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="ow  h-400 alignCenter">
         
          <div className="co-6">
            <div className="about__info">
              <h1>Hi There ,</h1>
              <div className="about__info-p1">
              I am Bala murugan, an adept React developer boasting two years of expertise in HTML, CSS, JavaScript, React, and Redux. My proficiency lies in crafting sophisticated and user-centric web applications that marry seamless functionality with elegant design.

My professional ethos revolves around collaboration and excellence. Thriving in dynamic settings, I am committed to perpetual learning, ensuring I remain abreast of industry advancements and best practices.

I am poised to contribute my skills and dedication to your esteemed team, leveraging my experience to drive innovation and deliver impactful solutions.

Looking forward to the prospect of collaborating with you.
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
