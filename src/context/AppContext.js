import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    let regexp = /^[0-9\b]+$/
    const initalState = {
        inputOneValue: '',
        inputTwoValue: '',
        calculatedValue: 0
    }
    const [appState, setAppState] = useState(
        {
            inputOneValue: '',
            inputTwoValue: '',
            calculatedValue: 0
        }
    );

    const addValues = () => {
        setAppState(prev => ({ ...prev, calculatedValue: parseInt(appState.inputOneValue) + parseInt(appState.inputTwoValue) }));
    }
    const handleClear = () => {
        setAppState(initalState)
        document.getElementById("inputOne").focus();
    }
    const handleInputOne = (event) => {
        let input = event.target.value;
        if (input === '' || regexp.test(input)) {
            setAppState(prev => ({ ...prev, inputOneValue: input }))
        }
    }
    const handleInputTwo = (event) => {
        let input = event.target.value;
        if (input === '' || regexp.test(input)) {
            setAppState(prev => ({ ...prev, inputTwoValue: event.target.value }))
        }
    }

    return <AppContext.Provider
        value={{ addValues, handleInputOne, handleInputTwo, handleClear, appState }}>
        {children}
    </AppContext.Provider>
}

export default AppContext;