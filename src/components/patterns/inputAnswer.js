import react, {useState, useEffect} from "react";
import { useCharada } from "../providers/charada";

export function InputAnswer() {
    const { charadaOfDay, myStats, setMyStats} = useCharada()
    const [inputAnswer, setInputAnswer] = useState('')
    const [inputStyle, setInputStyle] = useState()

    useEffect(() => {
        if (myStats.stats === true) {
            setInputStyle('bg-green-500 text-darkBluePrimary brightness-150 text-center font-bold text-xl')
            setInputAnswer(charadaOfDay.resposta.toLocaleUpperCase())
        } else if (myStats.stats === false) {
            setInputStyle('bg-rose-600 brightness-150 text-white font-bold')
            setInputAnswer('')
        } else {
            setInputStyle('')
            setInputAnswer('')
            return
        }
    },[myStats])

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
            className="w-full lg:w-2/3 text-xl"
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
                className={`${inputStyle} w-full p-2 font-semibold rounded-[4px] border-0 tracking-wide`}
                type={'text'}
                disabled={myStats.stats === true ? true : false}
                placeholder={myStats.myAnswer === '' ? 'Resposta' : `Ultima resposta: ${myStats.myAnswer}`}
                value={inputAnswer}
                onChange={(e) => {
                    setInputAnswer(e.target.value)
                }}
            />
        </form>
    )
}