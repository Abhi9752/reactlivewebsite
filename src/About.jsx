import React from "react";
import Common from "./Common";
import web from "../src/images/demo3.png";



const About = () => {
    return (
        <>
          <Common 
        name="Welcome to About page" 
        imgsrc={web} 
        visit="/contact" 
        btnname="Contact Now" />
        </>
    
    );
};


export default About;