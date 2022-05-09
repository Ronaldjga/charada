import react from "react";
import { useContext } from "react";
import { useCharada } from "../providers/charada";

export function CharadaContainer() {
    const {charadaOfDay, myStats} = useCharada()

    return (
        <div>
            <h2 className="text-yellowPrimary font-bold">{charadaOfDay.abreviacao}</h2>
            <p className="text-white">{charadaOfDay.charada}</p>
            {console.log(charadaOfDay)}
            {console.log(myStats)}
        </div>
    )
}