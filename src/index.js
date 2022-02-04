import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

class Hello1 extends React.Component {
  render() {
    return <h1>Hello world.</h1>;
  }
}

const classC = <Hello1 />

/*The code below defined a functional component called Hi that returns a simple React element.
We can use our user-defined element and render it on the page:
Remember, all component names must start with capital letters*/
function Hello2() {
  return <h1>Hi world.</h1>;
}

const functionC = <Hello2 />;

function Hello3(props) {
  return <p>Hello, {props.name}!</p>;
}

/*Here, our App component uses the Hello component three times, each times with a new name attribute.*/
function App1() {
  return <div>
    <Hello3 name="David" />
    <Hello3 name="James" />
    <Hello3 name="Amy" />
  </div>;
}
/*Generally, it is a good practice to split complex components into multiple smaller components, that are reusable.
For example, a Post component can use an Avatar component, an Image component, a Date component, etc.*/
const functionP = <App1 />;


//Let's create a shopping list.
function Item(props) {
  //The Item component will render a simple div element with the data:
  return <div className="item">
  <b>Name:</b> {props.name} <br />
  <b>Price:</b> ${props.price}
  </div>;
}

//Now we can use our component and create multiple items for our shopping list:
function App2() {
  return <div>
    {/*Each item in our list will have a name and a price.*/}
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.5" />
    <Item name="Ice cream" price="24" />
  </div>;
}

const propApp = <App2 />;

/*The code calls React's render method, and passes it two arguments, a JSX element and a container. The render method displays the provided element in the container which, in our case, is the HTML element with id="root".*/

ReactDOM.render(
  /*When you call the render method, any existing content of the container gets replaced. That is why, usually, the containers are empty in the HTML.*/
  <p>{classC} {functionC} {functionP} {propApp}</p>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
