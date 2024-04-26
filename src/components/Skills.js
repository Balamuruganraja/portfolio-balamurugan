import React from "react";
import Progressbar from './Progress_bar';
  
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
} from "react-icons/fa";
import{
  DiMysql,
} from "react-icons/di";
import { SiMongodb,SiExpress,SiRedux } from "react-icons/si";
const Skills = () => {
  const [header] = React.useState({
    mainHeader: "Skills",
    subHeading: "My Skills",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "Html",
      text:
        "95%",
      progress: <Progressbar bgcolor="#ff4a57" progress='95'  height={10} />
        
    },
    {
      id: 2,
      icon: <FaCss3Alt className="commonIcons" />,
      heading: "Css",
      text:
        "92%",
        progress: <Progressbar bgcolor="#ff4a57" progress='92'  height={10} />
    },
    {
      id: 3,
      icon: <FaJs className="commonIcons" />,
      heading: "javaScript",
      text:
        "90%",
        progress: <Progressbar bgcolor="#ff4a57" progress='90'  height={10} />
    },
    {
      id: 4,
      icon: <FaReact className="commonIcons" />,
      heading: "reactJs",
      text:
        "95%",
        progress: <Progressbar bgcolor="#ff4a57" progress='95'  height={10} />
    },
    {
      id: 5,
      icon: <SiRedux className="commonIcons" />,
      heading: "Redux",
      text:
        "90%",
        progress: <Progressbar bgcolor="#ff4a57" progress='90'  height={10} />
    },
    // {
    //   id: 6,
    //   icon: <SiExpress  className="commonIcons"/>,
    //   heading: "ExpressJs",
    //   text:
    //     "70%",
    //     progress: <Progressbar bgcolor="#ff4a57" progress='70'  height={10} />
    // },
    // {
    //   id: 7,
    //   icon: <SiMongodb className="commonIcons"/>,
    //   heading: "MongoDB",
    //   text:
    //     "70%",
    //     progress: <Progressbar bgcolor="#ff4a57" progress='70'  height={10} />
    // },
    // {
    //   id: 8,
    //   heading: "My Sql",
    //   icon: <DiMysql className="commonIcons"/>,
    //   text:
    //     "69%",
    //     progress: <Progressbar bgcolor="#ff4a57" progress='69'  height={10} />
    // },
  ]);
  return (
    <div className="services">
      <div className="containe">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="ow bgMain">
            {state.map((info) => (
              <div className="co-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <div className="services__box-p">{info.progress}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
