import React from 'react'
import './Counter.css';
import { connect } from 'react-redux';



   const Counter = props => {
       
    const increment = () => {
      props.dispatch({ type: "INCREMENT" });
    };
   
    const decrement = () => {
      props.dispatch({ type: "DECREMENT" });
    };
   
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div className="hhh">
        <i className="fa fa-minus-square" aria-hidden="true" onClick={() => decrement()}></i>
          <span className="count">{props.count}</span>
        <i className="fa fa-plus-square" aria-hidden="true" onClick={() => increment()}></i>
        </div>
      </div>
    );
   };
   const mapStateToProps = state => {
    return {
      count: state.count
    };
   };
   
   export default connect(mapStateToProps)(Counter);
