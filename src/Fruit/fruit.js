import React from 'react';

class Fruit extends React.Component {
       
    render() {
        //const price = "$9";
        return (
            <p>This is a {this.props.name
            } and it costs {this.props.cost}</p>
        )
    }
}


//Below is how the above can be written in ES6 functional component

/*
const Fruit = (props) => {
    return <>
        <p>This is must be a {props.name} and it costs {props.cost}</p>
    </>
}
*/


export default Fruit;