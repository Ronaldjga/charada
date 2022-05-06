import react, {useState, useEffect} from "react";
import { useCharada } from "../providers/charada";

export function InputAnswer() {
    const { charadaOfDay, setAttempts, attempts, setMyAnswer, isSuccess} = useCharada()
    const [inputAnswer, setInputAnswer] = useState('')


    return (
        <form
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                if (inputAnswer.length === 0) {
                    return
                } else {
                    if (isSuccess === true) {
                        return
                    } else {
                        setAttempts(attempts + 1)
                        localStorage.setItem('CharadasTentativas', attempts + 1)
                        setMyAnswer(inputAnswer)
                    }
                }
            }}
        >
            <input
                className="w-full p-2"
                type={'text'}
                placeholder={charadaOfDay.resposta}
                onChange={(e) => {
                    setInputAnswer(e.target.value)
                }}
            />
        </form>
    )
}