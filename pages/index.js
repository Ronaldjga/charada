import react from "react";
import { FlashAnswer } from "../src/components/patterns/flashAnswer";
import Header from "../src/components/patterns/header";
import { HelpForUser } from "../src/components/patterns/helpForUser";
import { InputAnswer } from "../src/components/patterns/inputAnswer";
import { CharadaContainer } from "../src/components/patterns/charadaContainer";
import { CharadaProvider } from "../src/components/providers/charada";

export default function Home() {
    return (
        <CharadaProvider>
            <div className="w-full h-full bg-darkBluePrimary">
                <div className="w-full h-full p-5 max-w-screen-xl mx-auto flex flex-col gap-3 items-center">
                    <Header/>
                    <div className="w-full h-full flex flex-col gap-2 justify-center items-center md:h-2/3">
                        <CharadaContainer />
                        <HelpForUser/>
                        <FlashAnswer />
                        <InputAnswer/>
                    </div>
                </div>
            </div>
        </CharadaProvider>
    )
}