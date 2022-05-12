import react, {useState, useEffect} from "react";
import { createContext, useContext } from "react";
import CharadaList from '../../../charadas.json';

export const Charada = createContext({});

export const CharadaProvider = (props) => {
    const charadaToday = new Date();
    const [day, setDay] = useState(charadaToday.getDate() - 1);
    const charadaOfDay = CharadaList.charadas[day]
    const [secondUpdate, setSecondUpdate] = useState();
    const [myStats, setMyStats] = useState({
        myAnswer: '',
        attempts: null,
        stats: null
    })


    useEffect(() => {
        const minuto = charadaToday.getDate() - 1
        window.clearTimeout(window)
        setTimeout(() => {
            setSecondUpdate(charadaToday.getSeconds())
            if (minuto === day) {
                return
            } else {
                setMyStats({
                    myAnswer: '',
                    attempts: null,
                    stats: null
                })
                localStorage.removeItem('charadaStats')
                setDay(charadaToday.getDate() - 1)
            }
        }, 1000)
    }, [secondUpdate])
    

    useEffect(() => {
        if (!localStorage.getItem('charadaStats')) {
            return
        } else {
            setMyStats(JSON.parse(localStorage.getItem('charadaStats')))
        }
    }, [])

    return (
        <Charada.Provider value={{ charadaOfDay, myStats, setMyStats, day}}>
            {props.children}
        </Charada.Provider>
    );
}


export const useCharada = () => useContext(Charada)