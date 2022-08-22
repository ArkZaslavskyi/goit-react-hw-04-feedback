import React from "react";
import { Statdata, StatUnit, StatValue, StatTotal } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Statdata>
            <StatUnit>Good <StatValue>{good}</StatValue></StatUnit>
            <StatUnit>Neutral <StatValue>{neutral}</StatValue></StatUnit>
            <StatUnit>Bad <StatValue>{bad}</StatValue></StatUnit>
            <StatUnit>
                <StatTotal>Total</StatTotal>
                <StatTotal><StatValue>{total}</StatValue></StatTotal>
            </StatUnit>
            <>
                {positivePercentage !== 0 &&
                <StatUnit>Positive feedback <StatValue>{`${positivePercentage}%`}</StatValue></StatUnit>}
            </>
        </Statdata>
    );
};

export default Statistics;