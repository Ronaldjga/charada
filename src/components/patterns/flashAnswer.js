import react, {useState ,useEffect} from "react";
import { useCharada } from "../providers/charada";

export function FlashAnswer() {
    const {charadaOfDay , attempts, isSuccess } = useCharada();
    const [flashMenssage, setFlashMenssage] = useState('');

    useEffect(() => {
        if (isSuccess === true) {
            setFlashMenssage('Resposta Certa');
        } else if (isSuccess === false) {
            setFlashMenssage('Resposta Errada')
        } else {
            setFlashMenssage('')
        }
    }, [isSuccess])

    return (
        <div>
            <p className="text-white">{attempts}</p>
            <p className="text-white">{flashMenssage}</p>
        </div>
    )
}