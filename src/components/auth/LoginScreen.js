import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {startGoogleLogin, startLoginUser} from "../../actions/auth";

const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm(  {
        email: 'hhhh@gmail.com',
        password: '123456'
    } );

    const {email, password} = formValues;

    const handleLogin = (e) => {
      e.preventDefault();
        dispatch(startLoginUser(email, password))
    }

    const handleGoogleLogin = (e) => {
      e.preventDefault();
        dispatch(startGoogleLogin())
    }

    return (
        <div>
            <h3 className={'auth__title'}>Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder={'Email'}
                    name={'email'}
                    value={email}
                    className={'auth_input'}
                    autoComplete={'off'}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder={'Password'}
                    name={'password'}
                    value={password}
                    className={'auth_input'}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className={'btn btn-primary btn-block'}
                    disabled={loading}
                >
                    {!loading ? 'Login' : 'Loading...'}
                </button>

                <div className={'auth__social-networks'}>
                    <p>Login with social Network</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to={'/auth/register'}
                    className={'link'}>
                        Create new account
                </Link>
            </form>
        </div>
    );
};

export default LoginScreen;
