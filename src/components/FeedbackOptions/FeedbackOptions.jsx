import PropTypes from 'prop-types';
import upFirstLetter from "utils/upFirstLetter";
import { FeedbackBtn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
        return (
        <FeedbackBtn
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback[option]}
        >
            {upFirstLetter(option)}
        </FeedbackBtn>)})
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.shape({
        neutral: PropTypes.func.isRequired,
        good: PropTypes.func.isRequired,
        bad: PropTypes.func.isRequired,
    }).isRequired,
};

export default FeedbackOptions;
