import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import validator from "validator/es";
import {useDispatch, useSelector} from "react-redux";
import {removeError, setError} from "../../actions/ui";
import {startRegisterUser} from "../../actions/auth";

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm(  {
        name:'Pedro',
        email: 'hhhh@gmail.com',
        password: '123456',
        password2: '123456'
    } );

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterUser(email,password,name));
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0){
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email) || email.trim().length === 0){
           if(!validator.isEmail(email)){
               dispatch(setError('Email is not valid'));
           } else {
               dispatch(setError('Email is required'));
           }
            return false;
        } else if (password !== password2 || password.length < 5){
            dispatch(setError('Password should be at least 6 character and match'));
            return false;
        }
        dispatch((removeError()));
        return true;
    }

    return (
        <div>
            <h3 className={'auth__title'}>Register</h3>
            <form onSubmit={handleRegister}>
                {
                    msgError &&
                   (
                       <div className="auth__alert-error">
                        {msgError}
                       </div>
                   )
                }
                <input
                    type="text"
                    placeholder={'Name'}
                    name={'name'}
                    value={name}
                    className={'auth_input'}
                    autoComplete={'off'}
                    onChange={handleInputChange}
                />
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
                <input
                    type="password"
                    placeholder={'Confirm password'}
                    name={'password2'}
                    value={password2}
                    className={'auth_input'}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className={'btn btn-primary btn-block mb-5'}
                >
                    Register
                </button>

                <Link
                    to={'/auth/login'}
                    className={'link'}>
                    Already registered?
                </Link>
            </form>
        </div>
    );
};

export default RegisterScreen;
