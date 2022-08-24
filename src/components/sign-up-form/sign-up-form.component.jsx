import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utlis";
import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";
import './sign-up-form.styles.scss'

const SignUpForm = () => {
    const [formFields, setFormFields] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("The passwords are not Matched!");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log({ user });
            // console.log(formFields);
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields({ displayName: '', email: '', password: '', confirmPassword: '' })
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already exist');
            } else {
                console.log('user creation encountered an error ', error);
            }
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name);
        setFormFields({ ...formFields, [name]: value });
        // console.log(formFields);
        console.log(password);
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account? </h2>
            <span>Sign Up with Your Email and Password. </span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;