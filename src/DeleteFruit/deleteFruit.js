import React from 'react';

const DeleteFruit = (props) => {
    return (
        <div>
            <input type='text' onChange={props.changed} />
            <button onClick={props.deleted}>Delete!</button>
            <p>{props.text}</p>
        </div>
    );
}

export default DeleteFruit;