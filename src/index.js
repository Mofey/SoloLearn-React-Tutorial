//import React from 'react'; //The general way of importing React without hooks for functional components.
/*React provides a special Hook called useEffect to make lifecycle methods available in functional components. It combines the componentDidMount, componentDidUpdate, and componentWillUnmount methods into one.
In order to use state inside of functional components, we will firstly need to import the useState hook:*/
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; // We commented this line because "App" was not used
import reportWebVitals from './reportWebVitals';





//Class components
//A simple class components
class Hello1 extends React.Component {
  render() {
    return <h1>Hello world.</h1>;
  }
}



//Props can be accessed in class components using "this.props".
class Hello2 extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}



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




//Function components
/*The code below defined a functional component called Hi that returns a simple React element.
We can use our user-defined element and render it on the page:
Remember, all component names must start with capital letters*/
function Hello3() {
  return <h2>Hi world.</h2>;
}



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



//Converter App (Km to Miles)
function Converter() {
  const [km, setKm] = useState(0);

  //The handleChange function updates the state with the current value of the textfield, causing the component to re-render and show the corresponding miles value, which is calculated using the convert function.
  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    //Calculates the miles value upon input:
    return (km/1.609).toFixed(2) + " miles";
  }

  return <div>
  <input type="text" value={km}
  //calling the handle change function when its value changes
  onChange={handleChange} />
  <p> {km} km is {convert(km)} </p>
  </div>;
}



//Form App
function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    //The "e.preventDefault();" statement prevents the default behavior of the form, which, by default, reloads the page when submitted. In JavaScript we would use "return false;" for that, but in React we need to call preventDefault().
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
    {/*The value of the input is controlled by React (we keep the value in the state). An input form element whose value is controlled by React in this way is called a "controlled component".*/}
    <input type="number" value={num} onChange={handleChange} />
    {/*When the form is submitted using the submit button, the handleSubmit function gets called, which updates the value of sum in the state.*/}
    <input type="submit" value="Add" />
    <p> Sum is {sum} </p>
  </form>;
}



//Rendering A List (Keys)
//Considering an array of strings "const arr = ["A", "B", "C"];", the program below represents how to render a list <li> element for each item in the array, defining a MyList component and passing it to the array as a prop using a custom data attribute: "<MyList data={arr} />"
//The function MyList() is called a component logic
function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    //Keys are important, because they uniquely identify elements, helping React understand which items have changed, are added, or are removed. Usually, these are IDs from your data, or can be auto-generated indexes.
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];
/*We take the input array from the incoming props, loop through the array using the JavaScript map function and return a <li> element for each item.
The resulted array is stored in the listItems variable.
Then, the component returns the listItems array inside a <ul> tag.*/



//
const classC = <Hello1 />
const classP = <Hello2 name="Mary" />;
const functionC = <Hello3 />;
const functionP = <App1 />;
const propApp = <App2 />;
const classS = <Hello5 />;
const counterApp = <CounterC />;
const counterApp1 = <CounterF />;
const counterApp2 = <CounterLmc />;
const counterApp3 = <CounterLmf />;
const formState = <AddForm />;
const listKey = <MyList data={arr} />;
const converterApp = <Converter />;



//Contact Manager App
//By taking a quick glance at this app, it makes sense to have two components; AddPersonForm and PeopleList.
//AddPersonForm: a form with the text field and Add button which uses state to manage the value of the text field:
function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
  
  /*Similar to passing the contacts list to our PeopleList component, we passed down the addPerson() function to our AddPersonForm using a prop called handleSubmit.
  Now, our PeopleList can call the handleSubmit function that it received when the form is submitted, to add a new person to the list:*/
  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      //We also clear the value of the text field using setPerson('') after adding a new person.
      setPerson('');
    }
    e.preventDefault();
  }
  /*The code above shows how to call the function "addPerson(name)" from our child AddPersonForm component, where the data for the new person is stored?
  Just like we passed down data using props, React allows us to pass down function references!*/

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

//PeopleList received an array representing the contacts and renders a list on the page:
function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
  //Note that we accessed our styling with the id attribute so as to make the styling peculiar to the contact manager app.
    <li key={index} id="li">{val}</li>
  );
  return <ul id="ul">{listItems}</ul>;
}


//Sharing State
/*Right now, our AddPersonForm independently keeps its state. How can we add a new contact to our PeopleList then, when the form is submitted?
To accomplish that, we need to share the state between the components. We can do that by lifting the state up to a parent component. This means that the parent component will hold the data that needs to be shared between the components. In our case, that is the contacts list.
Let's create a parent component called ContactManager, which includes the AddPersonForm and PeopleList as child components and holds the contacts list in its state:*/
function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
  /*The ContactManager component receives the initial contacts list using props, saves it in its state.
  Then it passes down the contacts list to its child component.
  Data can be passed from the parent to the child, but not from the child to the parent. React uses what is called unidirectional data flow, in other words, data only flows downward, so to speak.*/

  //Here, we created an addPerson() function to our ContactManager component to add a new person to our contacts state array:
  function addPerson(name) {
    setContacts([...contacts, name]);
  }
  /*But how are we going */

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
/*The ContactManager component receives the initial contacts list using props, saves it in its state.
Then it passes down the contacts list to its child component.
Data can be passed from the parent to the child, but not from the child to the parent. React uses what is called unidirectional data flow, in other words, data only flows downward, so to speak.*/
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];





/*The code calls React's render method, and passes it two arguments, a JSX element and a container. The render method displays the provided element in the container which, in our case, is the HTML element with id="root".*/

ReactDOM.render(
  /*When you call the render method, any existing content of the container gets replaced. That is why, usually, the containers are empty in the HTML.*/
  <p>{classC} {functionC} {functionP} {classP} {classS} {propApp} {counterApp} {counterApp1} {counterApp2} {counterApp3} <br /> {formState} {listKey} <br /> <br /> <h2>Converter App</h2>{converterApp} <br /> <br /> <h1>Contact Manager App</h1> <ContactManager data={contacts} /></p>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
