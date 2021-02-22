import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [appState, setAppState] = useState(
        {
            inputOneValue: '5',
            inputTwoValue: '6',
            calculatedValue: 0
        }
    );

    const addValues = () => {
        setAppState({ ...appState, calculatedValue: parseInt(inputOneValue) + parseInt(inputTwoValue) })
    }
    const handleInputOne = (input) => {
        setAppState({ ...appState, inputOneValue: input })
    }
    const handleInputTwo = (input) => {
        setAppState({ ...appState, inputTwoValue: input })
    }

    return <AppContext.Provider
        value={{ addValues, handleInputOne, handleInputTwo, appState }}>
            {children}
        </AppContext.Provider>
}

export default AppContext;