import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import { MainPage, QuestionPage, RegistrationPage, AuthPage, ProfilePage } from '../../pages';

import '../../styles/global.scss';
import '../../styles/media.scss';

const App = () => {
    const [categorie, setCategorie] = useState('');

    const setCategoryForSurvey = (categorie) => {
        setCategorie(categorie)
    }

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MainPage setCategoryForSurvey={setCategoryForSurvey}/>
                </Route>
                <Route exact path='/questions-list'>
                    <QuestionPage categorie={categorie}/>
                </Route>
                <Route exact path='/registration'>
                    <RegistrationPage/>
                </Route>
                <Route exact path='/auth'>
                    <AuthPage/>
                </Route>
                <Route exact path='/profile'>
                    <ProfilePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;