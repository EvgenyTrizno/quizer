import Questions from "../components/questions/Questions";

const QuestionPage = ({categorie}) => {
    return (
        <>
            <Questions categorie={categorie}/>
        </>
    );
}

export default QuestionPage;