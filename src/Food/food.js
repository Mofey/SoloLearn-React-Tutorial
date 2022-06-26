//import React from 'react';


//Functional components take props as their parameter and in order to use any data passed through props, declare a props parameter for your functional component.
const Food = (props) => {
    
    return (
            <p>This is a meal and it costs {props.price}</p>
        )
    }

export default Food;