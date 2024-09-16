
import ContainerPortafolio from "@/components/container-porafolio";
import PortafolioBox from "@/components/portafolio-box";
import PortafolioIntroduction from "@/components/portafolio-introduction";
import TransitionPage from "@/components/transition-page";
import { dataPortafolio } from "@/data";

const PortafolioPage = () => {
    return (
        <ContainerPortafolio>
            <TransitionPage/>

            <PortafolioIntroduction/>

            {dataPortafolio.map((data) => (
                <PortafolioBox key={data.id} data={data} />
            ))}                             

        </ContainerPortafolio>
    );
}

export default PortafolioPage;