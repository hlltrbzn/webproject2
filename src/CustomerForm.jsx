import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CustomerForm.css';

const CustomerForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerSurname, setCustomerSurname] = useState('');
    const [customerMail, setCustomerMail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const customerData = {
            customerName,
            customerSurname,
            customerMail,
        };

        axios.post('http://localhost:8080/api/testdb/addCustomer', customerData)
            .then(response => {
                navigate('/result', { state: { success: true } });
            })
            .catch(error => {
                console.error('There was an error!', error);
                navigate('/result', { state: { success: false } });
            });
    };

    return (
        <div className="form-container">
            <h1>Join Us</h1>
            <form onSubmit={handleSubmit} className="customer-form">
                <div className="form-group">
                    <label htmlFor="customerName">Customer Name:</label>
                    <input
                        id="customerName"
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="customerSurname">Customer Surname:</label>
                    <input
                        id="customerSurname"
                        type="text"
                        value={customerSurname}
                        onChange={(e) => setCustomerSurname(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="customerMail">Customer Mail:</label>
                    <input
                        id="customerMail"
                        type="email"
                        value={customerMail}
                        onChange={(e) => setCustomerMail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default CustomerForm;
