import React from 'react';
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'

function Hotels(){
    const imgStyle={
    padding:"10px",
    left:"400px",
    width:"30%",
    height:"100%",
    float:"left",
    borderRadius:"5px"
    
    }
    const cardStyle={
        width:"200px",
        height:"70px",
        marginLeft:"200px",
        marginTop:"500px",
        float:"left"
    }
    const descrypt={
        position:"absolute",
        marginLeft:"70px",
        float:"left"

    }
    return(
        <div>
            <h4 style={{marginTop:"50px"}}>Top Hotels</h4>
            <div className="card" style={cardStyle}>
                <img  style={imgStyle}src={img7} alt=" loading"/>
                <div style={descrypt}>The golden Hotel<div>*&nbsp;<i className="fas fa-star"></i><b>9.0</b></div></div>
            </div>
            <div className="card" style={cardStyle}>
                <img  style={imgStyle}src={img8} alt=" loading"/>
                <div style={descrypt}>The Mount Hotel<div>&nbsp;<i className="fas fa-star"></i><b>8.7</b></div></div>
            </div>
        </div>
    )
}
export default Hotels;
