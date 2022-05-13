import react from "react";

export function Footer() {
    return (
        <footer className="w-full h-[350px] bg-gray-900 flex justify-center items-center">
            <div className="w-2/4 flex flex-col items-center justify-center gap-3">
                <p className="text-yellowPrimary text-center">Informações pessoais</p>
                
                <h2 className="text-center text-3xl font-h2Title text-white">Ronald Almeida</h2>
                <button
                    className="text-darkBluePrimary bg-yellowPrimary hover:brightness-125 py-2 px-5 font-bold"
                >
                    <a target={"_blank"} rel="noreferrer" href="https://meu-portifolio-one.vercel.app/">
                        Meu Portifolio
                    </a>
                </button>
                
                <ul className="flex gap-2">
                    <li><a target={"_blank"} rel="noreferrer" className="hover:text-yellowPrimary text-white" href="https://github.com/Ronaldjga">Github</a></li>
                    <li><a target={"_blank"} rel="noreferrer" className="hover:text-yellowPrimary text-white" href="https://www.instagram.com/Ronald_jga/">Instagram</a></li>
                    <li><a target={"_blank"} rel="noreferrer" className="hover:text-yellowPrimary text-white" href="https://www.linkedin.com/in/ronald-almeida-749198220/">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    )
}