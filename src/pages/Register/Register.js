import React, { useState, useEffect } from 'react';
import './Register.css'

function Register() {

    const [formValues, setFormValues] = useState({
        fullname: '',
        universityID: '',
        emailID: '',
        phoneNum: '',
        branch: '',
        year: '',
        gender: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {

        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.fullName) {
            errors.fullName = 'Full Name is required!';
        }

        if (!values.universityID) {
            errors.universityID = 'University ID is required!';
        } else if (values.universityID.length !== 10) {
            errors.universityID = 'University ID must be of 10 digits.';
        }

        if (!values.emailID) {
            errors.emailID = 'Email is required!';
        } else if (!regex.test(values.emailID)) {
            errors.emailID = 'This is not a valid email format.';
        }

        if (!values.phoneNum) {
            errors.phoneNum = 'Phone number is required!';
        } else if (values.phoneNum.length !== 10) {
            errors.phoneNum = 'Phone number must be of 10 digits.';
        }

        // if (!values.password) {
        //     errors.password = 'Password is required';
        // } else if (values.password.length < 4) {
        //     errors.password = 'Password must be more than 4 characters';
        // } else if (values.password.length > 10) {
        //     errors.password = 'Password cannot exceed more than 10 characters';
        // }

        return errors;

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='fullName'>Full Name</label>
                    <input type='text' name='fullName' placeholder='Enter your full name' value={setFormValues.fullName} onChange={handleChange} />
                    <p>{formErrors.fullName}</p>
                </div>

                <div>
                    <label htmlFor='universityID'>University ID</label>
                    <input type='text' name='universityID' placeholder='Enter your university roll number' value={setFormValues.universityID} onChange={handleChange} />
                    <p>{formErrors.universityID}</p>
                </div>

                <div>
                    <label htmlFor='emailID'>Email ID</label>
                    <input type='text' name='emailID' placeholder='e.g. abc@example.com' value={setFormValues.emailID} onChange={handleChange} />
                    <p>{formErrors.emailID}</p>
                </div>

                <div>
                    <label htmlFor='phoneNum'>Phone Number</label>
                    <input type='text' name='phoneNum' placeholder='Enter your phone number' value={setFormValues.phoneNum} onChange={handleChange} />
                    <p>{formErrors.phoneNum}</p>
                </div>

                <div>
                    <label htmlFor='branch'>Branch</label>
                    <select name='branch' onChange={handleChange} >
                        <option name='' value=''>-- Select your branch --</option>
                        <option name='cse' value='CSE'>CSE</option>

                    </select>
                </div>

                <div>
                    <label htmlFor='year'>Year</label>
                    {/*dropdown
                     <input type='text' name='fullName' placeholder='Enter your full name' /> */}
                </div>

                <div>
                    <label htmlFor='gender'>Gender</label>
                    {/* Male, Female, Prefer not to say */}
                    {/* <input type='text' name='fullName' placeholder='Enter your full name' /> */}
                </div>

                <div>
                    <label htmlFor='events'>Events</label>
                    {/*Checkboxes
                     <input type='text' name='phoneNum' placeholder='Enter your phone number' /> */}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Register;
