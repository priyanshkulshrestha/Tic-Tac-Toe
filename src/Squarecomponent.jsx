import React from 'react'
// import   
const Squarecomponent=(props)=> {
    const classes = props.className?`${props.className} square`:"square";
    return (
        // <span style={{border:"1px solid red",padding:"30px"}}>x</span>
        <span className={classes} onClick={props.onClick}>
        {props.state}
        </span>
    );  
}  

export default Squarecomponent;
 

