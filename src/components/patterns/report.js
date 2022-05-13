import react from "react";
import { useRouter } from "next/router";

export function FormReport() {
    return (
        <form
            action="https://formspree.io/f/xjvljeba"
            method="POST"
            className="w-full lg:w-2/4 bg-gray-900 flex flex-col gap-5 p-5 border-2 border-yellowPrimary"
        >
            <input
                name="Nome"
                type={"text"}
                className="p-2"
                placeholder="Seu nome"
            />

            <input
                name="E-mail"
                type={"email"}
                className="p-2"
                placeholder="Seu e-mail"
            />
    
            <textarea
                required
                name="Mensagem"
                className="p-2"
                placeholder="Explique sobre o erro."
                rows={`12`}
            >
            </textarea>
            <button
                type="submit"
                className="w-2/5 mx-auto py-4 font-bold bg-yellowPrimary border-2 border-pink-900 hover:bg-pink-900 hover:text-white hover:border-yellowPrimary">
                    ENVIAR
            </button>
        </form>
    )
}

export function ReportButton() {
    const routes = useRouter()
    return (
        <button
            onClick={(e) => {
                e.preventDefault
                routes.push(`/report`)
            }}
            className="text-darkBluePrimary bg-yellowPrimary py-2 px-5 font-bold fixed bottom-5 right-5 hover:border-2 hover:border-white hover:bg-red-600 hover:text-white z-30"
        >
            Reportar Erro
        </button>
    )
}

export function BackHome() {
    const routes = useRouter()
    return (    
        <button
            onClick={(e) => {
                e.preventDefault
                routes.push(`/`)
            }}
            className="text-darkBluePrimary border-2 border-pink-900 bg-yellowPrimary py-2 px-5 font-bold fixed top-5 left-5 hover:bg-pink-900 hover:text-white hover:border-yellowPrimary z-30"
        >
            Home
        </button>
    )
}