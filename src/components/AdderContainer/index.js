import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import AppContext from '../../context/AppContext';
import Button from '../Button';
import InputOne from '../InputOne';
import InputTwo from '../InputTwo';

const Div = styled.div`
    background-color: #FFFFFF;
    border-radius: 15px;
    display: flex;

`

const AdderContainer = () => {
    const { addValues } = useContext(AppContext)
    return (
        <Div>
            <InputOne />
            <InputTwo />
            <Button label='Add' onSubmit={() => addValues} />
            <Button label='Clear' onSubmit={() => {}} />

        </Div>
    )
}

export default AdderContainer;