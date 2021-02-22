import React from 'react';
import styled, { css } from 'styled-components';

const Div = styled.div`
    background-color: #F1F1F0;
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Page = ({ children }) => {
    return (
        <Div>
            {children}
        </Div>
    )
}

export default Page;