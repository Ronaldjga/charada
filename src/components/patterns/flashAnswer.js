import react, {useState ,useEffect} from "react";
import { useCharada } from "../providers/charada";

export function FlashAnswer() {
    const {charadaOfDay , myStats } = useCharada();
    const [flashMenssage, setFlashMenssage] = useState('');

    useEffect(() => {
        if (myStats.stats === true) {
            setFlashMenssage('Resposta Certa');
        } else if (myStats.stats === false) {
            setFlashMenssage('Resposta Errada')
        } else {
            setFlashMenssage('')
        }
    }, [myStats])

    return (
        <div>
            <p className="text-white">{myStats.attempts}</p>
            <p className="text-white">{flashMenssage}</p>
        </div>
    )
}