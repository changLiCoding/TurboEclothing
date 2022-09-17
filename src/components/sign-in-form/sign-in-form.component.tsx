import {
    useState,
    ChangeEvent,
    FormEvent
    // useContext 
} from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// import { UserContext } from '../../contexts/user.context';
import {
    // signInWithGooglePopup,
    // createUserDocumentFromAuth, CHANGED_FROM_THUNK_TO_REDUX_SAGA
    // signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

import { ButtonsContainer, SignInContainer } from './sign-in-form.styles';
import { AuthError } from 'firebase/auth';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
        // await signInWithGooglePopup();
        // setCurrentUser(user);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // const { user } = await signInAuthUserWithEmailAndPassword(
            //     email,
            //     password
            // );
            // console.log({ user });
            // setCurrentUser(user);
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch ((error as AuthError).code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <ButtonsContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;