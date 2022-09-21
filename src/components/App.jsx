import { useState } from "react";
import Box from "components/Box";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Section from "components/Section";
import Notification from "components/Notification";

const App = () => {
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = {
    neutral: () => setNeutral(neutral + 1),
    good: () => setGood(good + 1),
    bad: () => setBad(bad + 1),
  }

  const total = neutral + good + bad;;
  const positive = good ? Math.round(good / total * 100) : 0;

  return (
    <Box width={300} ml='auto' mr='auto' border='1px solid' borderColor='gray' pl='20px' pr='20px'>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
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
};

export default App;