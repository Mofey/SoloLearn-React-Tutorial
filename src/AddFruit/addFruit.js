import React from "react";


class AddFruit extends React.Component{
    
    
    render(){
        const [ fruit, setFruit ] = this.props.name;
       
      
        function handleChange(e) {
            setFruit(e.target.value);
            
        }

        function handleSubmit(e) {
            if(fruit !== '') {
                this.props.handleSubmit(fruit);
                //We also clear the value of the text field using setFruit('') after adding a new fruit.
                setFruit('');
            }
            e.preventDefault();
        }
        return (
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Add new contact"
                onChange={handleChange}
                value={fruit} />
                <button type="submit">Add</button>
            </form>
        );
    }
    
}

export default AddFruit;