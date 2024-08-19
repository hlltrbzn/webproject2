import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './CustomerForm';
import ResultPage from './ResultPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<CustomerForm />} />
                    <Route path="/result" element={<ResultPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
