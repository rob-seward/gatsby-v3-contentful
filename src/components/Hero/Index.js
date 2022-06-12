import React from 'react';
import { Herowrapper, Headingwrapper, Heading, SubHeading } from './style';
import {BgImage} from 'gbimage-bridge';
import {getImage} from 'gatsby-plugin-image';


export const Hero = ({ heading, subHeading, backgroundImage}) => {
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