import react from "react";
import { FlashAnswer } from "../src/components/patterns/flashAnswer";
import { InputAnswer } from "../src/components/patterns/inputAnswer";
import { CharadaContainer } from "../src/components/patterns/randomCharada";
import { CharadaProvider } from "../src/components/providers/charada";

export default function Home() {
    return (
        <CharadaProvider>
            <div className="bg-darkBluePrimary">
                <div className="w-full max-w-screen-xl mx-auto">
                    <CharadaContainer />
                    <FlashAnswer/>
                    <InputAnswer/>
                </div>
            </div>
        </CharadaProvider>
    )
}