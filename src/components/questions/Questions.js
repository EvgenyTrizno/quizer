import { useEffect, useState } from 'react';

import QuizerServices from '../../services/quizerServices';

import Result from '../result/Result';
import './Questions.scss';

const Questions = ({categorie}) => {
    const { getQuastions } = QuizerServices();

    const [data, setData] = useState([]);
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [noCorrect, setNoCorrect] = useState(0);

    const randomQuize = () => {
        const randomNum = Math.floor(Math.random() * 4);

        const arr = ['ecology', 'energy', 'patriotism'];

        return arr[randomNum];
    }

    useEffect(() => {
        getQuastions()
            .then(res => res.filter(item => item.categorie !== categorie ? randomQuize() : item.categorie === categorie))
            .then(data => setData(data));
    }, []);

    const onSelectVariant = (index) => {
        setStep(step + 1);

        if (index === +data[step].correct) {
            setCorrect(correct + 1);
        }

        if (index !== +data[step].correct) {
            setNoCorrect(noCorrect + 1);
        }
    }

    return (
        <div className="questions">
            <div className="container">
                {/* <p className="questions__list-subtitle"> 
                    Экология / Одиночная игра
                </p> */}
                {step !== data.length ? <View data={data} step={step} onSelectVariant={onSelectVariant}/> : <Result data={data} correct={correct} noCorrect={noCorrect}/>}
            </div>
        </div>
    );
}

const View = ({data, step, onSelectVariant}) => {
    const  progress = Math.round((step / data.length) * 100);

    return (
        <div className="questions__list">
            <div className="progress-bar">
                <div className="progress-bar__inner">
                    <div className="progress-bar__line" style={{"width": `${progress}%`}}></div>
                </div>
                <div className="progress-bar__counter">
                    {step + 1} из {data.length}
                </div>
            </div>
            <h3 className="questions__list-question">
                {data[step].question}
            </h3>
            <div className="questions__list-answers">
                {
                    data[step].variants.map((item, i) => (
                        <div 
                            className="questions__list-answer" 
                            key={i}
                            onClick={() => onSelectVariant(i)}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Questions;