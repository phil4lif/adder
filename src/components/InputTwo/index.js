import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import AppContext from '../../context/AppContext';

const InputBox = styled.input`
    background-color: #F3F4F5;
`
const InputTwo = ({ }) => {
    const { appState, handleInputTwo } = useContext(AppContext);
    return (
        <InputBox value={appState.inputTwoValue} onChange={handleInputTwo}/>
    )
}

export default InputTwo;