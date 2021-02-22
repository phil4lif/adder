import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import AppContext from '../../context/AppContext';

const Container = styled.div`
    background-color: #F3F4F5;
    border: 0;
    border-radius: 8px;
    height:100px;
    width: 100px;
    font-size: 48px;
    text-align: center;
    display:flex;
    justify-content:center;
    align-items: center;
    `

const SumDisplay = () => {
    const { appState } = useContext(AppContext);
    return (
        <Container>
            <p>{appState.calculatedValue}</p>
        </Container>
    )
}

export default SumDisplay;