import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({index, number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            onDoubleClick={() => { onSetColor(index) } }
            onClick={() => {onIncrement(index)}}        //onClick = { onIncrement(index) } 하면 Maximum update depth exceeded 오류 뜸.
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement(index);
                }
            }
            style ={{ backgroundColor : color}}>
            { number }
        </div>
    );
};

Counter.propTypes = {
    index : PropTypes.number,
    number : PropTypes.number,
    color : PropTypes.string,
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor : PropTypes.func
};

Counter.defaultProps = {
    index : 0,
    number : 0,
    color : 'black',
    onIncrement : () => console.warn('onIncrement not defined'),
    onDecrement : () => console.warn('onDecrement not defined'),
    onSetColor : () => console.warn('onSetColor not defined')
};

export default Counter;