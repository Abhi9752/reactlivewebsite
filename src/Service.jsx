import React from 'react';
import Sdata from './Sdata';
import Card from './Card';


const Service = () => { 
  
  return (
  <>
      <div className="my-5">
          <h1 className="text-center"> 
            Our Services 
          </h1>
      </div> 

      {Sdata.map((val,index) => {
        return(
          <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.links}    
       />
        );
      })}
</>
  )
};

export default Service;