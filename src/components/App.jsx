import React, { Component } from "react";
import Box from "components/Box";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Section from "components/Section";
import Notification from "components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }))
  };

  countTotalFeedback = () => {
    const {
      good,
      neutral,
      bad } = this.state;
    
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return good ? Math.round(good / this.countTotalFeedback() * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <Box width={300} ml='auto' mr='auto' border='1px solid' borderColor='gray' pl='20px' pr='20px'>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {
            total
              ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive} />
              : <Notification message={"There is no feedback"} />
          }
        </Section>
      </Box>
    );
  }

};

export default App;