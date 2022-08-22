import styled from '@emotion/styled';

export const FeedbackBtn = styled.button`
    display: inline-block;

    padding: 10px 20px;


    border: none;
    background-color: #eeffcc;
    border-radius: 4px;

    font-weight: 700;

    cursor: pointer;

    &:not(:first-of-type) {
        margin-left: 10px;
    }

    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
`;
