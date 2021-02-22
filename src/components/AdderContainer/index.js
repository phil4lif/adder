import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import AppContext from '../../context/AppContext';
import Button from '../Button';
import InputOne from '../InputOne';
import InputTwo from '../InputTwo';
import SumDisplay from '../SumDisplay';

const Div = styled.div`
    background-color: #FFFFFF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 600px;
`
const Row = styled.div`
    display: flex;
`
const ButtonRow = styled.div`
    display: flex;
    margin-top: 48px;
    align-items: flex-end;
    justfy-content:flex-end;
`
const Spacer = styled.div`
    width:200px;
`
const OpContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100px;
    width: 100px;
    font-size: 36px;
`

const AdderContainer = () => {
    const { addValues, handleClear } = useContext(AppContext)
    return (
        <Div>
            <Row>
            <InputOne />
            <OpContainer>
                +
            </OpContainer>
            
            <InputTwo />
            <OpContainer>
                =
            </OpContainer>
            
            <SumDisplay />
            </Row>
            <ButtonRow>
            <Spacer />
            <Button label='Clear' onSubmit={() => handleClear()} />
            <Button label='Add' onSubmit={() => addValues()} />
            </ButtonRow>
            

        </Div>
    )
}

export default AdderContainer;