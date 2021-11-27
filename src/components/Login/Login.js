import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInWithGoogle, error, setError, isLogin, setIsLogin, processLogin,
        createNewUser, email, setEmail, password, setPassword, handleNameChange, signInWithGithub } = useAuth()

    const location = useLocation();
    const history = useHistory();
    const redirect_URI = location.state?.from || '/home'



    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_URI)
            }).catch((error) => {
                setError(error.message)
            });
    }


    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be 6 characters')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }
    const toggleLogIn = e => {
        setIsLogin(e.target.checked);
    }
    return (
        <div>
            <div className="container login-area">
                <form onSubmit={handleRegistration}>
                    <div className="row my-3">
                        <h1 className='text-dark text-center my-3'><u>
                            Please {isLogin ? 'Log in' : 'Register'}</u></h1>
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>

                    {
                        !isLogin && <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" required />
                            </div>
                        </div>
                    }

                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary d-block mx-auto btn-lg">{isLogin ? 'Log in' : 'Sign Up'}</button>
                </form>
            </div >
        </div>
    );
};

export default Login;