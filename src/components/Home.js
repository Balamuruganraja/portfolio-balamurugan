import React,{useState} from "react";
import {HomeContainer,HomeBg,VideoBg,HomeContent,} from './homebg'
import HD0411 from './HD0411.mp4'


const Home = () => {
  const [state] = useState({
    title: "Bala murugan",
    text:
      "I'm Bala murugan I'm Passionate Frontend  Developer from India   ",
    image: "/images/man-01.png",
  });
  return (
    <HomeContainer>
      <HomeBg>
                <VideoBg autoPlay loop muted src={HD0411} type='HD0411/mp4' />
            </HomeBg>
            <HomeContent>         
    <header className="header">
      <div className="containe">
        <div className="ow">
          <div className="co-6">
            <div className="header__content">
              <div className="header__section">
               
               
                <h1>{state.title}</h1>
                <div >
                <p>{state.text}</p>
                </div>
                <div className="header_ho">
                  <a href="https://drive.google.com/file/d/17yNJIjirX-QL6SYv7Fi4hEsunZkpKd3m/view?usp=drive_link" target="_blank" className="bt bt-outline">
                    View Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </header>
    </HomeContent>
    </HomeContainer>
  );
};

export default Home;
