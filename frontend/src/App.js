import React from 'react';
import Upload from './components/Upload/Index';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(252, 252, 252);
    }
`;

const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Upload />
        </React.Fragment>
    )
}

export default App;