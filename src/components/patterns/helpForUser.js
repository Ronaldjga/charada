import react from "react";
import { useCharada } from "../providers/charada";

export function HelpForUser() {
    const {charadaOfDay, myStats}= useCharada()
    const caracteres = charadaOfDay.resposta.split('');
    return (
        <div className="w-full text-white flex justify-center gap-2">
            {myStats.attempts >= 5 || myStats.stats === true ? caracteres.map((data, i) => {
                return (
                    <div key={i} className="w-full max-w-[50px] max-h-[50px] p-1 border-2 border-yellowPrimary flex justify-center items-center font-bold text-xl">
                        {myStats.stats === true ? data.toUpperCase() : null}
                    </div>
                )
            }) : null}
        </div>
    )
}