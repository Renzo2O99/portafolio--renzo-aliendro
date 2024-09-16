import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-4xl mb-12 pt-16 leading-tight text-center md:text-left md:text-5xl">
                    Toda mi {' '}

                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>

                <CounterServices />
                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutMePage;