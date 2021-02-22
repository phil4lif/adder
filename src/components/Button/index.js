import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    background-color: #202020;
    display: flex;
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`

const Text = styled.p`
    color: #FFFFFF;
    font-size: 16;

`

const Button = ({label, onSubmit}) => {
    
    return (
        <Container onClick={onSubmit}>
            <Text>{label}</Text>
        </Container>
    )
}

export default Button;