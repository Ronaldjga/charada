import react, {useState, useEffect} from "react";
import { useContext } from "react";
import { useCharada } from "../providers/charada";

export function CharadaContainer() {
    const {charadaOfDay, myStats, day} = useCharada()

    // const charadaToday = new Date();
    // const [day, setDay] = useState();

    // useEffect(() => {
    //     window.clearTimeout(window)
    //     setTimeout(() => {
    //         setDay(`${charadaToday.getMinutes()}:${charadaToday.getSeconds()}`)
    //     }, 1000)
    // }, [day])

    return (
        <div>
            <h2 className="text-yellowPrimary font-bold">{charadaOfDay.abreviacao}</h2>
            <p className="text-white">{charadaOfDay.charada}</p>
            <p className="text-white">{day}</p>
            {console.log(charadaOfDay)}
            {console.log(myStats)}
           
        </div>
    )
}