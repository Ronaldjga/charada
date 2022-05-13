import react from "react";
import { Footer } from "../src/components/patterns/footer";
import { BackHome, FormReport } from "../src/components/patterns/report";

export default function Report() {
    return (
        <>
            <div className="w-full h-fit bg-darkBluePrimary flex flex-col items-center md:justify-center pt-16 gap-5">
                <div
                    className="w-full flex flex-col items-center md:justify-center gap-5 px-4"
                >
                    <h1 className="font-h1Title text-center text-5xl font-bold p-5 text-yellowPrimary">Reporte</h1>
                    <p className="max-w-screen-lg mx-auto text-white text-center">
                    Charada é um site desenvolvido no intuito de prática de tecnologias de desenvolvimento web, sendo assim, não possui fins lucrativos. Entretanto, o desenvolvedor se preocupa em deixar tudo o mais limpo e organizado possível, portanto, se encontrar algum erro, reporte, para ser corrigido.
                    </p>
                    <FormReport></FormReport>
                </div>
                <BackHome />
                <Footer/>
            </div>
        </>
    )
}