import react, {useState ,useEffect} from "react";
import { useCharada } from "../providers/charada";

export function FlashAnswer() {
    const {charadaOfDay , myStats } = useCharada();
    const [flashMenssage, setFlashMenssage] = useState('');
    const [flashMenssageStyle, setFlashMenssageStyle] = useState('');

    useEffect(() => {
        if (myStats.stats === true) {
            setFlashMenssage('Resposta Certa');
            setFlashMenssageStyle('text-green-500 brightness-150 animate-pulse')
        } else if (myStats.stats === false) {
            setFlashMenssage('Resposta Errada')
            setFlashMenssageStyle('text-rose-600 brightness-150')
        } else {
            setFlashMenssage('')
        }
    }, [myStats])

    return (
        <div className="text-center">
            <p className="text-white font-semibold">{myStats.attempts > 0 ? `${myStats.attempts} Tentativas` : null}</p>
            <p className={`${flashMenssageStyle} font-bold text-2xl`}>{flashMenssage.toLocaleUpperCase()}</p>
        </div>
    )
}