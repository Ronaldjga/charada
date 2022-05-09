import react, {useState, useEffect} from "react";
import { createContext, useContext } from "react";
import CharadaList from '../../../charadas.json';

export const Charada = createContext({});

export const CharadaProvider = (props) => {
    const charadaOfDay = CharadaList.charadas[8]
    const [history, setHistory] = useState()
    const [myStats, setMyStats] = useState({
        myAnswer: '',
        attempts: null,
        stats: null
    })

    
    const isCorrectAnswer = (myAnswer) => {
        
    }
    
    useEffect(() => {
        if (!localStorage.getItem('charadaStats')) {
            return
        } else {
            setMyStats(JSON.parse(localStorage.getItem('charadaStats')))
        }
    }, [])

    return (
        <Charada.Provider value={{ charadaOfDay, myStats, setMyStats, isCorrectAnswer}}>
            {props.children}
        </Charada.Provider>
    );
}


export const useCharada = () => useContext(Charada)