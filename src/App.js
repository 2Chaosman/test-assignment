import React from 'react';
import './App.css';
import TableArea from "./Components/TableArea";
import Header from "./Components/header/Header";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <TableArea/>
        </div>
    );
}


export default App;
