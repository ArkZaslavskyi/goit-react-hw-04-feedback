import styled from "@emotion/styled";

export const Statdata = styled.div`
    padding-bottom: 8px;
`;
export const StatUnit = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding-top: 8px;
    padding-bottom: 4px;
    font-size: 16px;
    line-height: 1.25;
    :not(:last-of-type){
        border-bottom: 1px dotted gray;
    }
    
`;

export const StatTotal = styled.span`
    font-weight: 700;
`;

export const StatValue = styled.span`
    display: inline-block;
    padding: 4px;
`;


