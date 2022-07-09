import { Component } from "react";
import Statistics from "./Statistics";
import Notification from "./Notification"
import FeedbackOptions from "./FeedbackOptions";
import { Container } from "./Feedback.styled"

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    hendleAddFeedback = (e) => {
        const option = e.currentTarget.value;
        this.setState({ [option]: this.state[option] + 1 })
    };

    countTotalFeedback = () => {
        let total = this.state.good + this.state.neutral + this.state.bad;

        return total;
    };

    countPositiveFeedbackPercentage = () => {
        let percentage = Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);

        return percentage;
    };

    render() {
      return (
            <Container>
                <div>
                  <h2>Please leave feedback</h2>
                  
                  <FeedbackOptions
                      options={Object.keys(this.state)}
                      onLeaveFeedback={this.hendleAddFeedback}/>
                </div>
                <div>
                  <h2>Statistic</h2> 
                  {this.countTotalFeedback() > 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/> }
                </div>
            </Container>);
    };
};

export default Feedback;