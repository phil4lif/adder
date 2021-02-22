import React from 'react';
import { AdderContainer, Page } from './components';
import { AppProvider } from './context/AppContext';

function App() {
    return (
        <AppProvider>
            <Page>
                <AdderContainer />
            </Page>
        </AppProvider>
    );
}
export default App;