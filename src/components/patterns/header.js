import { info } from "autoprefixer";
import react, { useState } from "react";
import { createContext, useContext } from "react";
import helpIcon from '../img/help-circle.svg'
import infoIcon from '../img/info.svg'
import settingsIcon from '../img/settings.svg'
import Image from "next/image";

export const NavButtons = createContext({});

export const NavButtonsProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState()
    return (
        <NavButtons.Provider value={{isOpen, setIsOpen, modal, setModal}}>
            {props.children}
        </NavButtons.Provider>
    )
}
export const useNavButtons = () => useContext(NavButtons)


export default function Header() {
    
    
    return (
        <NavButtonsProvider>
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl sm:text-8xl font-bold text-yellowPrimary font-h1Title">Charada</h1>
                <Options/>
            </div>
        </NavButtonsProvider>
    )
}

function Options() {
    const {isOpen, setIsOpen, modal} = useNavButtons()
    
    return (
        <div className="flex justify-center gap-3">
            <ButtonNav
                title='Configurações'
                text="Configurações em breve"
                icon={settingsIcon}
            />
            <ButtonNav
                title='Ajuda'
                text={<>
                    Charadas é um site desenvolvido para fins recreativos. Acerte as charadas que apareceram diariamente.
                    <br/><br/>
                    A partir da 5º (quinta Tentativa), a ajuda aparecera, revelando quantos caracteres possui a resposta correta.
                    <br/><br/>
                    A resposta é validade caso a palavra chave esteja correta, por exemplo: "uma estrada", caso a resposta correta seja "estrada", sera validada como correta, contanto que a palavra "chave" esteja com a acentuação correta.
                </>}
                icon={helpIcon}
            />
            <ButtonNav
                title='Creditos'
                text={<>Criado Por Ronald Almeida, <a className="hover:text-yellowPrimary" target={"_blank"} href="https://www.instagram.com/ronald_jga/">@Ronald_jga</a>.</>}
                icon={infoIcon}
            />
            {isOpen === true
                ? (
                    <div className="fixed z-40">
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30" onClick={(e)=> setIsOpen(false)}/>
                        {modal}
                    </div>
                )
                : null}
        </div>
    )
}

function ButtonNav({title, text, icon}) {
    const styleButtons = 'relative w-[35px] h-[35px] bg-yellowPrimary rounded-[4px] p-1 hover:brightness-125 hover:scale-110'
    const {isOpen, setIsOpen, setModal} = useNavButtons()

    return (
        <button
                onClick={(e) => {
                    e.preventDefault()
                    if (isOpen === true) {
                        setIsOpen(false)
                    } else {
                        setIsOpen(true)
                        setModal(
                            <div className="fixed p-4 w-11/12 min-h-[250px] flex flex-col gap-3 items-center top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-50

                            bg-gray-900 text-white rounded-[4px] border border-yellowPrimary

                            lg:w-2/4
                            ">
                                <h2 className="text-3xl font-bold">{title}</h2>
                                <p className="w-full text-center">{text}</p>
                             </div>
                        )
                    }
                }}
                className={styleButtons}>
            <Image
                layout="responsive"
                src={icon}
                alt={title}
            />
        </button>
    )
}

