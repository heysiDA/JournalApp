import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import {firebase} from "../firebase/firebase-config";
import { useDispatch } from 'react-redux';
import {login} from "../actions/auth";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if(!!user){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            }  else  {
                setIsLoggedIn(false);
            }
            console.log()
            setChecking(false);
        })
    }, [dispatch, setChecking])

    if (checking){
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}/>
                    <PrivateRoutes
                        exact
                        path="/"
                        component={JournalScreen}
                        isAuthenticated={isLoggedIn}
                    />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
