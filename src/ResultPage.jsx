import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultPage.css';

const ResultPage = () => {
    const location = useLocation();
    const { state } = location;
    const success = state?.success;

    return (
        <div className="result-container">
            <h1 className={success ? 'success' : 'error'}>
                {success ? 'Customer added successfully!' : 'There was an error adding the customer.'}
            </h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`icon ${success ? 'success-icon' : 'error-icon'}`}
            >
                {success ? (
                    <>

                        <path d="M22 4L10 22 3 15"></path>
                    </>
                ) : (
                    <>
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6l12 12"></path>
                    </>
                )}
            </svg>
        </div>
    );
};

export default ResultPage;
