import Feedback from './components/Feedback/Feedback';
import { Component } from 'react';
import s from './App.css';
import Statistics from "./components/Statistics/Statistics";
// import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    Object.values(this.state).reduce(
      (acc, element) => acc + Number(element),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    console.log(total);
    const good = this.state.good;
    console.log(good);
    return total
      ? Number(good * 100) /
          Number(this.countTotalFeedback())
      : 0;
  }

  handleChange = (e) => {
    const targetId = e.target.id;
    this.setState((prevState) => ({
      [targetId]: prevState[targetId] + 1,
    }));
  };

  render() {
    // const {
    //   countTotalFeedback,
    //   countPositiveFeedbackPercentage,
    //   handleChange,
    // } = this;
    // const total = this.countTotalFeedback();
    // console.log(total);
    return (
      <>
        <h1 className={s.title}>
          Please leave feedback
        </h1>
        <Feedback
          handleChange={this.handleChange}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
