import react, {useState, useEffect} from "react";
import { createContext, useContext } from "react";
import CharadaList from '../../../charadas.json';

export const Charada = createContext({});

export const CharadaProvider = (props) => {
    const charadaOfDay = CharadaList.charadas[3]
    const [attempts, setAttempts] = useState(0)
    const [myAnswer, setMyAnswer] = useState('')
    const [isSuccess, setIsSuccess] = useState()
    
    const isCorrectAnswer = () => {
        if (myAnswer.length > 0) {
            if (myAnswer === charadaOfDay.resposta) {
                setIsSuccess(true)
            } else {
                setIsSuccess(false)
            }
        } else { return }
    }
    
    useEffect(() => {
        isCorrectAnswer()
    }, [myAnswer])
    
    useEffect(() => {
        setAttempts(JSON.parse(localStorage.getItem('CharadasTentativas')))
    }, [])

    return (
        <Charada.Provider value={{ charadaOfDay, attempts, setAttempts, myAnswer, setMyAnswer, isSuccess}}>
            {props.children}
        </Charada.Provider>
    );
}


export const useCharada = () => useContext(Charada)