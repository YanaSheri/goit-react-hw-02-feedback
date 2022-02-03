import { Component } from "react";
import s from "./Feedback.module.css";

const CounterC = ({ counter }) => <p className={s.count}>{counter}</p>;

class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    
    // handleGooD = () => {
    //     this.setState((prevState) => {
    //     return {
    //         good: prevState.good + 1,
    //     };
    //     });
    // };

    // handleNeutral = () => {
    //     this.setState((prevState) => {
    //     return {
    //         neutral: prevState.neutral + 1,
    //     };
    //     });
    // };

    // handleBad = () => {
    //     this.setState((prevState) => {
    //     return {
    //         bad: prevState.bad + 1,
    //     };
    //     });
    // };
    
    handleChange = (e) => {
        const target = e.target.id;
        this.setState((prevState) => ({ [target ]: prevState[target] + 1}));
    };

  render() {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Please leave feedback</h1>
         {/* <CounterC counter={this.state.counter} /> */}
           <button id="good" onClick={this.handleChange} className={s.btn} type="button">
             Good
           </button>
           <button id="neutral" onClick={this.handleChange} className={s.btn} type="button">
             Neutral
           </button>
           <button id="bad" onClick={this.handleChange} className={s.btn} type="button">
             Bad
            </button>
            <h2 className={s.title}>Statistics</h2>
            <p>Good: { this.state.good }</p>
            <p>Neutral: { this.state.neutral }</p>
            <p>Bad: { this.state.bad }</p>
    </div>
    );
    //    return (
    //     <div className={s.container}>
    //         <h1 className={s.title}>Please leave feedback</h1>
    //      {/* <CounterC counter={this.state.counter} /> */}
    //        <button onClick={this.handleGooD} className={s.btn} type="button">
    //          Good
    //        </button>
    //        <button onClick={this.handleNeutral} className={s.btn} type="button">
    //          Neutral
    //        </button>
    //        <button onClick={this.handleBad} className={s.btn} type="button">
    //          Bad
    //         </button>
    //         <h2 className={s.title}>Statistics</h2>
    //         <p>Good: { this.state.good }</p>
    //         <p>Neutral: { this.state.neutral }</p>
    //         <p>Bad: { this.state.bad }</p>
    // </div>
    // );
  }
}

export default Counter;