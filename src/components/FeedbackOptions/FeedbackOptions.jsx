import React from "react";
import PropTypes from 'prop-types';
import upFirstLetter from "utils/upFirstLetter";
import { FeedbackBtn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option =>
        <FeedbackBtn
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
        >
            {upFirstLetter(option)}
        </FeedbackBtn>)
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
