import React from 'react';
import styled from 'styled-components'
import {BgImage} from 'gbimage-bridge';
import {getImage} from 'gatsby-plugin-image';


const Herowrapper = styled.div`
    width: 100%;
    height: 50vh;
    >div:first-child {
        height: 90%
    
    }`

const Headingwrapper = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        >div{
            margin: auto;
            padding: 16px;
            max-width: 1000px;
            text-align: center;
            line-height: 1.5;
        }`

const Heading = styled.div`
            margin: auto;
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 10px;
    `;

const SubHeading = styled.div`
        max-width: 500px;
        margin: 0 auto;
    `;

export const Hero = ({ heading, subHeading, backgroundImage }) => {
    const pluginImage = getImage(backgroundImage);
    return (
        <Herowrapper>
            <BgImage image={pluginImage}>
                <Headingwrapper>
                    <div>
                    <Heading>{heading}</Heading>
                    <SubHeading>{subHeading}</SubHeading>
                    </div>
                </Headingwrapper>
            </BgImage>
        </Herowrapper>
    )
};


