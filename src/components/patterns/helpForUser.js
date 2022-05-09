import react from "react";
import { useCharada } from "../providers/charada";

export function HelpForUser() {
    const {charadaOfDay, myStats}= useCharada()
    const caracteres = charadaOfDay.resposta.split('');
    return (
        <div className="text-white flex gap-2">
            {myStats.attempts >= 5 ? caracteres.map((data, i) => {
                return (
                    <div key={i} className="w-[30px] h-[30px] border-2 border-yellowPrimary flex justify-center items-center">
                        {myStats.stats === true ? data.toUpperCase() : null}
                    </div>
                )
            }) : null}
        </div>
    )
}