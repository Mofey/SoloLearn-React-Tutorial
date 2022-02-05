//import React from 'react';
/*React provides a special Hook called useEffect to make lifecycle methods available in functional components. It combines the componentDidMount, componentDidUpdate, and componentWillUnmount methods into one.
In order to use state inside of functional components, we will firstly need to import the useState hook:*/
import React, { useState, useEffect } from 'react';
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

//Props can be accessed in class components using this.props.
class Hello2 extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

const classP = <Hello2 name="Mary" />;


/*The code below defined a functional component called Hi that returns a simple React element.
We can use our user-defined element and render it on the page:
Remember, all component names must start with capital letters*/
function Hello3() {
  return <h2>Hi world.</h2>;
}

const functionC = <Hello3 />;

function Hello4(props) {
  return <p>Hello, {props.name}!</p>;
}

/*Here, our App component uses the Hello component three times, each times with a new name attribute.*/
function App1() {
  return <div>
    <Hello4 name="David" />
    <Hello4 name="James" />
    <Hello4 name="Amy" />
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


/*Many web apps need their components to change their data, for example, after user interaction (clicking a button, submitting a form, etc.).
However, props cannot be changed.
In order to allow components to manage and change their data, React provides a feature called state.*/
class Hello5 extends React.Component {
  //As you can see, state is just a simple object, that contains key:value pairs.
  state = {
    name: "Sam"
  }
  //Now, when the component renders, the state is initialized with the given value and there will be a heading that says "Hello Sam.".
  render() {
    //Similar to props, the values can be accessed using this.state.
    return <h3>Hello {this.state.name}.</h3>;    
  }
}

const classS = <Hello5 />;



//Counter App
//We start by creating our Counter component, which includes the counter and 2 buttons:
class CounterC extends React.Component {
  state = {
    //We then initialize our counter to the value 0 in the state.
    counterC: 0
  }
  //Then we added the click event handlers to the buttons and increment or decrement the counter in the state.
  increment = () => {
    this.setState({counterC: this.state.counterC+1});
  }
  decrement = () => {
    this.setState({counterC: this.state.counterC-1});
  }
  render() {
    return <div>
    <p>{this.state.counterC}</p>
    <button onClick={this.increment}>Increment</button>
    {/*The onClick event calls the increment or decrement function of our component, which uses setState to change the value of our counter. When the state is changed, React automatically triggers a re-render of the component.*/}
    <br/>
    {/*Notice that the event handler uses camelCase syntax and that the handler function is passed in curly braces.*/}
    <button onClick={this.decrement}>Decrement</button>
    </div>;
  }
}
const counterApp = <CounterC />;


//We can also achieve the counter app with the functional components
function CounterF() {
  //The square brackets syntax is called array destructuring. It assigns the name variable to the current state value, and setName to the function that allows to change the state.
  const [counterF, setCounter] = useState(0);

  function increment() {
    setCounter(counterF+1);
  }
  function decrement() {
    setCounter(counterF-1);
  }
  return <div>
  <p>{counterF}</p>
  <button onClick={increment}>Increment</button>
  <br/>
  <button onClick={decrement}>Decrement</button>
  </div>;
}
const counterApp1 = <CounterF />;


//Lifecycle Methods

function CounterLmf() {
  const [counterLmf, setCounter] = useState(1);

  useEffect(() => {
    alert("Number of clicks: " + counterLmf);
  });
  /*To call the method only when something changes, we can provide it a second argument:
  useEffect(() => {
    do something
  }, [count]);

  To mimic componentWillUnmount, useEffect may return a function that cleans up after it:
  useEffect(() => {
    do something
  
    return () => {
      cleanup
    }; 
  });*/

  function increment() {
    setCounter(counterLmf+1);
  }
  
  return <div>
  <p>{counterLmf}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}

const counterApp2 = <CounterLmf />;

/*Mounting is the process when a component is rendered on the page.
Unmounting is the process when a component is removed from the page.*/
class CounterLmc extends React.Component {
  state = {
    counterLmc: 0
  }
  decrement = () => {
    this.setState({counterLmc: this.state.counterLmc-1});
  }
  //componentDidMount is typically used for populating the state inside of a component when it initially mounts to the DOM. We can also use componentDidMount in a Counter app to set the initial value of the counter:
  componentDidMount() {
    this.setState({counterLmc: 1});
  }
  //This will set an initial value of the counter when the component is rendered. Similarly, the componentWillUnmount() lifecycle method is called right before the component is removed from the DOM. It can be used to free up resources taken by the component.

  //componentDidUpdate() is only called when the component is updated.
  componentDidUpdate() {
    alert("Number of clicks: " + this.state.counterLmc);
  }

  //This will set an initial value of the counter when the component is rendered.
  render() {
    //The componentDidMount method is called when a component is rendered on the page.
    return <div>
      <br/>
      <p>{this.state.counterLmc}</p>
      <button onClick={this.decrement}>Decrement</button>
    </div>;
  }
}
const counterApp3 = <CounterLmc />;








/*The code calls React's render method, and passes it two arguments, a JSX element and a container. The render method displays the provided element in the container which, in our case, is the HTML element with id="root".*/

ReactDOM.render(
  /*When you call the render method, any existing content of the container gets replaced. That is why, usually, the containers are empty in the HTML.*/
  <p>{classC} {functionC} {functionP} {classP} {classS} {propApp} {counterApp} {counterApp1} {counterApp2} {counterApp3}</p>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
