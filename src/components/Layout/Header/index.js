import React from 'react';
import { HeaderInner, HeaderWrapper } from './style';
import Menu from './Menu';


export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <Menu />
            </HeaderInner>
        </HeaderWrapper>
    )
}