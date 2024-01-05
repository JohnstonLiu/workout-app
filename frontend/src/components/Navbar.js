import { Link } from 'react-router-dom';
import SignInButton from './SignInButton.js';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Split Manager</h1>
                </Link>
                <Link to="">
                    <h2>My Exercises</h2>
                </Link>
                <SignInButton />
            </div>
        </header>
    )
};

export default Navbar;