import react, {useState, useEffect} from "react";
import { useCharada } from "../providers/charada";

export function InputAnswer() {
    const { charadaOfDay, myStats, setMyStats} = useCharada()
    const [inputAnswer, setInputAnswer] = useState('')

    const isCorrectAnswer = () => {
        
        if (inputAnswer.toLocaleUpperCase().includes(charadaOfDay.resposta.toLocaleUpperCase())) {
            setMyStats({ stats: true, attempts: myStats.attempts + 1, myAnswer: inputAnswer })
            const stats = {stats: true, attempts: myStats.attempts + 1, myAnswer: inputAnswer }
            localStorage.setItem('charadaStats', JSON.stringify(stats))
        } else {
            setMyStats({ stats: false, attempts: myStats.attempts + 1, myAnswer: inputAnswer }) 
            const stats = { stats: false, attempts: myStats.attempts + 1, myAnswer: inputAnswer }
            localStorage.setItem('charadaStats', JSON.stringify(stats))
        }
    }

    return (
        <form
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                if (inputAnswer.length === 0) {
                    return
                } else {
                    if (myStats.stats === true) {
                        return
                    } else {
                        isCorrectAnswer()
                    }
                }
            }}
        >
            <input
                className="w-full p-2"
                type={'text'}
                placeholder={myStats.myAnswer === '' ? 'Resposta' : myStats.myAnswer}
                onChange={(e) => {
                    setInputAnswer(e.target.value)
                }}
            />
        </form>
    )
}