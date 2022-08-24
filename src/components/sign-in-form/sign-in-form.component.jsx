import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utlis";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss'

const SignInForm = () => {
    const [formFields, setFormFields] = useState({ email: '', password: '' });
    const { email, password } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            setFormFields({ email: '', password: '' })

        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("Incorrect password please try again.")
            } else if (error.code === "auth/user-not-found") {
                alert("No user associated with the Email.")
            }
            console.log(error);

        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name);
        setFormFields({ ...formFields, [name]: value });
        // console.log(formFields);
        console.log(password);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={'google'} onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;