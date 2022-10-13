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
        gender: '',
        username: '',
        events: {
            hackathon: false,
            cp: false,
            ctf: false,
            esports: {
                valorant: false,
                bgmi: false
            },
            videoEdit: false,
            digitalArt: false,
            quiz: false
        }
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevFormValues => {
            return {
                ...prevFormValues,
                [name]: value
            }
        });
        // console.log(formValues);
    };

    const handleChangeEvents = (e) => {
        const { name, checked } = e.target;
        setFormValues(prevFormValues => {
            return {
                ...prevFormValues,
                events: {
                    ...prevFormValues.events,
                    [name]: checked
                }
            }
        });
        // console.log(formValues.events);
    };

    const handleChangeEsports = (e) => {
        const { name, checked } = e.target;
        setFormValues(prevFormValues => {
            return {
                ...prevFormValues, events: {
                    ...prevFormValues.events,
                    esports: {
                        ...prevFormValues.events.esports,
                        [name]: checked
                    }
                }
            }
        });
        // console.log(formValues.events);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // successfully submitted wala code
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        console.log(values);

        const errors = {};
        const regexAlphabets = /^[A-z]([-']?[A-z]+)*( [A-z]([-']?[A-z]+)*)+$/;
        const regexNos = /^\d+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.fullName || values.fullName.trim() === '') {
            errors.fullName = 'Full name is required!';
        } else if (!regexAlphabets.test(values.fullName)) {
            errors.fullName = 'Enter valid characters.';
        }

        if (!values.universityID || values.universityID.trim() === '') {
            errors.universityID = 'University ID is required!';
        } else if (values.universityID.length !== 10) {
            errors.universityID = 'University ID must be of 10 digits.';
        } else if (!regexNos.test(values.universityID)) {
            errors.universityID = 'Only enter numbers.';
        }

        if (!values.emailID || values.emailID.trim() === '') {
            errors.emailID = 'Email is required!';
        } else if (!regexEmail.test(values.emailID)) {
            errors.emailID = 'This is not a valid email format.';
        }

        if (!values.phoneNum || values.phoneNum.trim() === '') {
            errors.phoneNum = 'Phone number is required!';
        } else if (values.phoneNum.length !== 10) {
            errors.phoneNum = 'Phone number must be of 10 digits.';
        } else if (!regexNos.test(values.phoneNum)) {
            errors.phoneNum = 'Only enter numbers.';
        }

        if (!values.branch) {
            errors.branch = 'Branch is required!';
        }

        if (!values.year) {
            errors.year = 'Year is required!';
        }

        if (!values.gender) {
            errors.gender = 'Gender is required!';
        }

        if (!values.username || values.username.trim() === '') {
            errors.username = 'Username is required!';
        } else if (values.username.length < 4) {
            errors.username = 'Username should at least be of 4 characters.';
        } else if (values.username.length > 16) {
            errors.username = "Username can't be longer than 16 characters.";
        }

        if (values.events === {
            hackathon: false,
            cp: false,
            ctf: false,
            esports: {
                valorant: false,
                bgmi: false
            },
            videoEdit: false,
            digitalArt: false,
            quiz: false
        }) {
            errors.events = 'Please select events you want to participate in.';
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
        <div className='formPageContainer'>

            <div className='formContainer'>
                <h1 className='registerNow'>Register Now</h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor='fullName'>Full Name<span>*</span></label><br />
                        <input type='text' name='fullName' placeholder='Enter your full name' value={setFormValues.fullName} onChange={handleChange} />
                        <p>{formErrors.fullName}</p>
                    </div>

                    <div>
                        <label htmlFor='universityID'>University ID<span>*</span></label><br />
                        <input type='text' name='universityID' placeholder='Enter your university roll number' value={setFormValues.universityID} onChange={handleChange} />
                        <p>{formErrors.universityID}</p>
                    </div>

                    <div>
                        <label htmlFor='emailID'>Email ID<span>*</span></label><br />
                        <input type='text' name='emailID' placeholder='e.g. abc@example.com' value={setFormValues.emailID} onChange={handleChange} />
                        <p>{formErrors.emailID}</p>
                    </div>

                    <div>
                        <label htmlFor='phoneNum'>Phone Number<span>*</span></label><br />
                        <input type='text' name='phoneNum' placeholder='Enter your phone number' value={setFormValues.phoneNum} onChange={handleChange} />
                        <p>{formErrors.phoneNum}</p>
                    </div>

                    <div>
                        <label htmlFor='branch'>Branch<span>*</span></label><br />
                        <select name='branch' onChange={handleChange} >
                            <option name='' value=''>-- Select your branch --</option>
                            <option name='cse' value='CSE'>CSE</option>
                            <option name='bca' value='BCA'>BCA</option>
                            <option name='bpharm' value='B.Pharm'>B.Pharm</option>
                            <option name='nursing' value='nursing'>Nursing</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='year'>Year<span>*</span></label><br />
                        <select name='year' onChange={handleChange} >
                            <option name='' value=''>-- Select your year --</option>
                            <option name='first' value='First year'>First year</option>
                            <option name='second' value='Second year'>Second year</option>
                            <option name='third' value='Third year'>Third year</option>
                            <option name='fourth' value='Fourth year'>Fourth year</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='gender'>Gender<span>*</span></label><br />
                        <select name='gender' onChange={handleChange} >
                            <option name='' value=''>-- Select your gender --</option>
                            <option name='male' value='Male'>Male</option>
                            <option name='female' value='Female'>Second year</option>
                            <option name='preferNotToSay' value='Prefer not to say'>Prefer not to say</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='username'>Username<span>*</span></label><br />
                        <input type='text' name='username' placeholder='Pick a username' value={setFormValues.username} onChange={handleChange} />
                        <p>{formErrors.username}</p>
                    </div>

                    <div>

                        <label>Events<span>*</span></label><br />

                        <input type='checkbox' name='hackathon' value='24hr Hackathon' onChange={handleChangeEvents} />&ensp;
                        <label htmlFor='hackathon'>24hr Hackathon</label>

                        <input type='checkbox' name='cp' value='Competitive Programming' onChange={handleChangeEvents} />&ensp;
                        <label htmlFor='cp'>Competitive Programming</label>

                        <input type='checkbox' name='ctf' value='Capture the Flag' onChange={handleChangeEvents} />&ensp;
                        <label htmlFor='ctf'>Capture the Flag</label>

                        <label htmlFor='esports'>E-Sports</label>
                        <input type='checkbox' name='valorant' value='Valorant' onChange={handleChangeEsports} />
                        <label htmlFor='valorant'>Valorant</label>
                        <input type='checkbox' name='bgmi' value='BGMI' onChange={handleChangeEsports} />
                        <label htmlFor='bgmi'>BGMI</label>

                        <input type='checkbox' name='videoEdit' value='Short Film Editing' onChange={handleChangeEvents} />
                        <label htmlFor='videoEdit'>Short Film Editing</label>

                        <input type='checkbox' name='digitalArt' value='Digital Art' onChange={handleChangeEvents} />
                        <label htmlFor='digitalArt'>Digital Art</label>

                        <input type='checkbox' name='quiz' value='Quiz' onChange={handleChangeEvents} />
                        <label htmlFor='quiz'>Quiz</label>

                        <p>{formErrors.events}</p>

                    </div>
                    <button type='submit' className='registerButton'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
