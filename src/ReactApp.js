import React, { Component } from 'react'
import App from './FruitApp/fruitApp';
import Food from './Food/food';
import Fruit from './Fruit/fruit';
//import AddFruit from './AddFruit/addFruit'
import DeleteFruit from './DeleteFruit/deleteFruit';



class ReactApp extends Component {

    //The state is simply a property of a class, which extends React.Component.
    //It stores the data of the component.
    //The uniqueness of the state is that if at any point it gets a new value, React re-renders the component.
    state = {
        fruits: [
            {name: 'Lemon', cost: '$5'},
            {name: 'Mango', cost: '$1'},
            {name: 'Banana', cost: '$3'}
        ],
        userText: '',
        counter:0 //1st step
    }


    /*addFruit = (name, cost) => {
        this.setFruits([...this.state.fruits, name]);
        this.setFruitsCost([...this.state.fruits, cost]);
    }*/



    onChangeHandler = (event) => {
        this.setState({ userText: event.target.value });
    }

    //The user inputs the name of a fruit, so we can use the findIndex() function to find an index of an element which has that name.
    deleteHandler = () => {
        //The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
        const fruitIndex = this.state.fruits.findIndex(el => {
            return el.name === this.state.userText;
        });
        //Now let's check and see if that fruit exists, copy our fruits array from the state, delete that fruit from the list, and set new state. If it doesn't exist, just show that the fruit is not found.
        if (fruitIndex >= 0) {
          let newFruits = [...this.state.fruits];
          newFruits.splice(fruitIndex, 1);
          this.setState({ fruits: newFruits });
        }
        else {
          this.setState({userText: 'Not found!'});
        }
    }



    
    //Here we handle the button clicked to modify the counter value.
    clickHandler = () => {
        const oldCount = this.state.counter;
        const newCount = oldCount + 1;
    this.setState({counter: newCount});
    }
    //Notice the setState() function. It signals React to render the component again (calls the render() function). Without the setState() function React won't call the render() again, that's why we can't update the view by simply changing the state value.




    render(){
        return <>

            <p>You can click on Pineapple to see what happens</p>

            {/* Finally, connect the click handler function to the onClick event. */}
            <App clicked={this.clickHandler} />
            <p>You clicked on Pineapple  {/* this.state.counter += 1 (React prohibits changing the state directly. The setState() function compares the old state with the new one and updates only the values that have changed. This is a good optimization introduced by React and its virtual DOM.)*/} { this.state.counter } times</p>
            {/* <App /> */}


            <br />


            <Food price = '$20' />

            {/* Let's modify the fruits to initialize and update the list of fruits using the component state. Now we can use the fruits array instead of hardcoding fruit names in the render() function. */}
            {/*<Fruit name={this.state.fruits[0].name} cost={this.state.fruits[0].cost}/>
            <Fruit name={this.state.fruits[0].name} cost={this.state.fruits[0].cost}/>
            <Fruit name={this.state.fruits[0].name} cost={this.state.fruits[0].cost}/>*/}

            {/* Here's a nicer way: */}
            { this.state.fruits.map((el, index) => { return <Fruit key={index} name={el.name} cost={el.cost} /> })}

            {/* <AddFruit /> */}

            <DeleteFruit changed={this.onChangeHandler} text={this.state.userText} deleted={this.deleteHandler}/>

        </>
    }
    
    
}


export default ReactApp;