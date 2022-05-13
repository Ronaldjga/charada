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
        charadaDay: charadaOfDay.id - 1,
        myAnswer: '',
        attempts: null,
        stats: null
    })


    useEffect(() => {
        clearTimeout(window)
        //console.log(day, myStats.charadaDay)
        setTimeout(() => {
            setSecondUpdate(charadaToday.getMilliseconds())
            setDay(charadaToday.getDate() - 1)
            if (day === myStats.charadaDay) {
                return
            } else {
                setMyStats({
                    charadaDay: day,
                    myAnswer: '',
                    attempts: null,
                    stats: null
                })
                localStorage.removeItem('charadaStats')
            }
        }, 1);
        
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