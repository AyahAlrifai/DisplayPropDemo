import React from 'react';
import ReactDOM from 'react-dom';
import './flex_example.css';
import { BsFillMicFill,BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch,AiOutlinePlus } from "react-icons/ai";
import { FcGoogle,FcKey,FcClapperboard,FcCalculator,FcBarChart,FcVideoCall,FcMusic,FcLinux,FcSurvey} from "react-icons/fc";

const Container1 = ()=>{
  return <div className="container1_style">
    <div className="container1_elements_style"><a href="#">Gmail</a></div>
    <div className="container1_elements_style"><a href="#">Images</a></div>
    <div className="container1_elements_style"><BsFillGrid3X3GapFill /></div>
    <div className="container1_elements_style"><FaUserAlt /></div>
  </div>;
}

const Container2 = () => {
  return <div className="container2_style">Ayah</div>
}

const Container3 = () => {
  return  <div className="container3_style">
      <div className="container3_1_style">
        <div>
          <AiOutlineSearch />
        </div>
        <div style={{width:"86%"}}>
          <input placeholder="Search Google or Type URL.." type="text" className="search-box"/>
        </div>
        <div>
          <BsFillMicFill />
        </div>
      </div>
    </div>;
}

const Container4 = (prop) => {
  const apps = prop.apps.map((item)=>{
    return   <div key={item[0]} className="container4_1_hover_style">
                <div className="container4_1_icon_style">{item[1]}</div>
                <div className="container4_1_text_style">{item[0]}</div>
            </div>
  });

  return <div className="container4_style">
          <div  className="container4_1_style">
            {apps}
          </div>
        </div>;
}

export const FlexExample =()=>{
  const apps1= [
    ["Google",<FcGoogle />],
    ["Polls",<FcBarChart />],
    ["FcCalculator",<FcCalculator />],
    ["Film",<FcClapperboard />],
    ["Key",<FcKey />]
  ]
  const apps2= [
    ["Linux",<FcLinux />],
    ["Music",<FcMusic />],
    ["Camera",<FcVideoCall />],
    ["Survey",<FcSurvey />],
    ["Add shortcut",<AiOutlinePlus style={{color:"#000000"}} />]
  ]

    return <>
    <Container1 />
    <Container2 />
    <Container3 />
    <Container4 apps={apps1} />
    <Container4 apps={apps2} />
  </>
}
