import React from "react";

const AllCoinData = ({name , symbol , price ,imgSrc})=>{

    return (
       
            <div className="box-data">
                <img src={imgSrc} alt = {name} className = "coin-img" />
                <h1>{name}</h1>
                <p className="symbol">{symbol}</p>
                <p className="price"> ₹ {price}</p>
            </div>
       
    )
}


export default AllCoinData ;