import { signInWithGoogle } from '../Firebase.js';

const SignInButton = () => {
    return (
        <button onClick={signInWithGoogle} className="loginWithGoogleButton">Sign In</button>
        )
};

export default SignInButton;