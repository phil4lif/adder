import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import AppContext from '../../context/AppContext';

const InputBox = styled.input`
    background-color: #F3F4F5;
    border: 0;
    border-radius: 8px;
    height:100px;
    width: 100px;
    font-size: 48px;
    text-align: center;
`
const InputTwo = ({ }) => {
    const { appState, handleInputTwo } = useContext(AppContext);
    return (
        <InputBox value={appState.inputTwoValue} onChange={handleInputTwo} />
    )
}

export default InputTwo;