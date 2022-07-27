import { useState } from "react";
import Statistics from "./Statistics";
import Notification from "./Notification"
import FeedbackOptions from "./FeedbackOptions";
import { Container } from "./Feedback.styled"

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const hendleAddFeedback = (e) => {
        const option = e.currentTarget.name;

        if (option === 'good') {
            setGood(prevGood => prevGood + 1 )
        } else if(option === 'neutral'){
            setNeutral(prevNeutral => prevNeutral + 1 )
        } else {
            setBad(prevBad => prevBad + 1 )
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good / (good + neutral + bad) * 100);
    };

    return (
        <Container>
            <div>
              <h2>Please leave feedback</h2>
              
              <FeedbackOptions
                  options={Object.keys({ good, neutral, bad })}
                  onLeaveFeedback={hendleAddFeedback}/>
            </div>
            <div>
              <h2>Statistic</h2> 
              {countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/> }
            </div>
        </Container>);
};