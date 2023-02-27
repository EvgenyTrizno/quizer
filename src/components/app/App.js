import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainPage, QuestionPage, RegistrationPage, AuthPage, ProfilePage } from '../../pages';

import '../../styles/global.scss';
import '../../styles/media.scss';
import { db } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";

const App = () => {
    const [quizzes] = useState([]);

    const fetchQuizzes = async () => {
        const querySnapshot = await getDocs(collection(db, "quizzes"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
    }

    useEffect(() => {
        fetchQuizzes();
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MainPage/>
                </Route>
                <Route exact path='/questions'>
                    <QuestionPage/>
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