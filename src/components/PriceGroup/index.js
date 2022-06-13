import React from 'react';
import {
    PriceOptionStyled,
    PriceGroupWrapper, 
    PriceOptionInnerStyled,
    MostPopularLabel,
} from './style';

import { RichText } from '../RichText';

export function PriceGroup({priceOptions}) {
    
    return (
        <PriceGroupWrapper>
            {priceOptions.map(priceOption => (
                <PriceOptionStyled key={priceOption.id}>
                    <PriceOptionInnerStyled isMostPopular={priceOption.mostPopuar}>
                        {!!priceOption.mostPopuar &&  (
                            <MostPopularLabel>Most Popular</MostPopularLabel>)}
                        
                        <h2>£{priceOption.title}</h2>
                        <h3>£{priceOption.amountPerMonth} / per month</h3>
                        <RichText raw={priceOption.description.raw}></RichText>
                    </PriceOptionInnerStyled>
                </PriceOptionStyled>
            ))}
        </PriceGroupWrapper>
    )
};