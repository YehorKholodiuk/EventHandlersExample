import React from 'react';

function Counter(props) {

    const {counter} = props;

    return (
        <p>
            <button onClick={() => console.log(counter - 1)}> -1</button>
            {' '}{counter}{' '}
            <button onClick={() => console.log(counter + 1)}> +1</button>
        </p>
    );
}

export default Counter;