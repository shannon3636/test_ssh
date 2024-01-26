import React from 'react';
import './scss/style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
// import MegaMenu from './components/mega-menu/MegaMenu';
import Test from './components/a/Test';

function App() {
    return (
        <Router>
            {/* <MegaMenu /> */}
            <Test></Test>
        </Router>

    );
}

export default App;
