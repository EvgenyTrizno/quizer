import Header from "../components/header/Header";
import QuizMenu from "../components/quizMenu/QuizMenu";
import SearchPanel from "../components/searchPanel/SearchPanel";
import QuizCategories from "../components/quizCategories/QuizCategories";

const MainPage = ({setCategoryForSurvey}) => {
    return (
        <>
            <Header/>
            <QuizMenu/>
            <SearchPanel/>
            <QuizCategories setCategoryForSurvey={setCategoryForSurvey}/>
        </>
    );
}

export default MainPage;