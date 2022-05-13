import react from "react";
import { FlashAnswer } from "../src/components/patterns/flashAnswer";
import Header from "../src/components/patterns/header";
import { HelpForUser } from "../src/components/patterns/helpForUser";
import { InputAnswer } from "../src/components/patterns/inputAnswer";
import { CharadaContainer } from "../src/components/patterns/charadaContainer";
import { CharadaProvider } from "../src/components/providers/charada";
import { ReportButton } from "../src/components/patterns/report";
import Head from "next/head";

export default function Home() {
    return (
        <CharadaProvider>
            <Head>
                <title>Charada</title>
                <meta property="Description" content="Charada" key="title" />
            </Head>
            <Head>
                <link rel="shortcut icon" href="https://github.com/Ronaldjga/charada/blob/main/src/components/img/favicon.png?raw=true" />
            </Head>
            <div className="w-full h-full bg-darkBluePrimary">
                <div className="w-full h-full p-5 max-w-screen-xl mx-auto flex flex-col gap-3 items-center">
                    <Header/>
                    <div className="w-full h-full flex flex-col gap-5 sm:justify-center items-center md:h-2/3">
                        <CharadaContainer />
                        <HelpForUser/>
                        <FlashAnswer />
                        <InputAnswer/>
                    </div>
                    <ReportButton/>
                </div>
            </div>
        </CharadaProvider>
    )
}