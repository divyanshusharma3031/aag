import React, { useState } from "react";
import Card from "./Card";
import Navbar from './Navbar';
import data from "./utils";
function ListMain() {
    const [info, setInfoData] = useState(data)
  const filterItem = (category) => {
    if (category === "All") {
      setInfoData(data);
      return;
    }
    const updatedList = data.filter((curEle) => {
      return curEle.category === category;
    });
    setInfoData(updatedList);
  };
  return (
    <>
        <Navbar filterItem={filterItem}/>
        <section className="main-card-container1">
        {
            info.map((i)=>{
                return(<Card info={i} key={i.id}/>)
            })
        }
        </section>
    </>
    
  );
}

export default ListMain;
