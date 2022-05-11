import react, {useState, useEffect} from "react";
import { useContext } from "react";
import { useCharada } from "../providers/charada";

export function CharadaContainer() {
    const {charadaOfDay, myStats} = useCharada()

    return (
        <div>
            <h2
                className="text-yellowPrimary font-h2Title font-bold text-center text-3xl
                md:text-5xl
            ">
                {charadaOfDay.abreviacao}
            </h2>
            <p className="text-white my-2 md:my-5 text-center md:text-xl">{charadaOfDay.charada}</p>
        </div>
    )
}