
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utlis";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utlis";
import Button from "../../components/button/button.component";
const SignIn = () => {


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page!</h1>
            <Button buttonType={'google'} onClick={logGoogleUser}>Sign In with Google Popup</Button>
            <SignUpForm />

        </div>
    )
};

export default SignIn;