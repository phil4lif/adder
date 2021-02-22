import React, {useContext} from 'react';
import styled, { css } from 'styled-components';
import AppContext from '../../context/AppContext';

const InputBox = styled.input`
    background-color: #F3F4F5;
`;
const InputOne = ({ }) => {
    const {appState, handleInputOne} = useContext(AppContext)
    return (
        
        <InputBox value={appState.inputOneValue} onChange={(t) => handleInputOne(t)} />
    )
}

export default InputOne;