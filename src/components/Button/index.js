import React, {useContext} from 'react';
import styled, { css } from 'styled-components';
import AppContext from '../../context/AppContext';

const Container = styled.div`
    background-color: #202020;
    display: flex;
    margin: 16px;
    width: 100px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`

const Text = styled.p`
    color: #FFFFFF;
    font-size: 20px;
`

const Button = ({label, onSubmit}) => {
    const {appState} = useContext(AppContext);
    let disabled = appState.inputOneValue === '' || appState.inputTwoValue === '' ? true : false;
    return (
        <Container onClick={disabled ? null : onSubmit}>
            <Text>{label}</Text>
        </Container>
    )
}

export default Button;