
import styled from 'styled-components';


export const PriceGroupWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1000px;
    margin: 0 auto;


`;

export const PriceOptionStyled = styled.div`
    padding: 20px;

`;

export const PriceOptionInnerStyled = styled.div`
    margin: 0 auto;
    background: ${({isMostPopular})=> isMostPopular ? 'orange':'#efefef'};
    border: 1px solid #999;
    padding: 10px 10px 30px 10px;
    border-radius: 10px;
    position: relative;
    height: 100%;
    box-sizing: border-box;

`;

export const MostPopularLabel = styled.div`
    position: absolute;
    right: -1px;
    top: -1px;
    padding: 5px;
    background: limegreen;
    color: white;
    font-size: 14px;
    font-weight: bold;
`;