import React, { Component } from 'react';
import './fruitApp.css'

class App extends Component {
    render() {
        const name = "Pineapple"
        return (
            <>
            <div className="Fruit">
                <p className="click">Click;</p>
                <button onClick={this.props.clicked}>{name}!</button>
            </div>
            
            </>
        )
    }
}

export default App;