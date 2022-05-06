import react from "react";
import { useCharada } from "../providers/charada";

export function HelpForUser() {
    const {charadaOfDay, attempts, isSuccess}= useCharada()
    const caracteres = charadaOfDay.resposta.split('');
    return (
        <div className="text-white flex gap-2">
            {attempts >= 5 ? caracteres.map((data, i) => {
                return (
                    <div className="w-[30px] h-[30px] border-2 border-yellowPrimary flex justify-center items-center">
                        {isSuccess === true ? data.toUpperCase() : null}
                    </div>
                )
            }) : null}
        </div>
    )
}