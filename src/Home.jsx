import React from "react";
import Common from "./Common";
import web from "../src/images/demo3.png";


const Home = () => {
    return (
        <>
        <Common 
        name="Grow your bussiness with" 
        imgsrc={web} 
        visit="/service" 
        btnname="Get Started" />
        </>
    );
};


export default Home;