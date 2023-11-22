import React from "react";
import { Link } from "react-router-dom";
export default function ScrollBox({cakeData}){
    return(
        <Link to = {`/birthday-cakes/${cakeData.cakeName}`}>
            <div className="scrollbox">
                <img src= {cakeData.image}/>
                <div className="scrollbox-details">
                    <h1>{cakeData.cakeName}</h1>
                    <h2>#{cakeData.rangeLow.toLocaleString()} - #{cakeData.rangeHigh.toLocaleString()}</h2>
                </div>
            </div>
        </Link>
    )
}