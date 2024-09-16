import TransitionPage from "@/components/transition-page";
import ServicesCard from "@/components/services-card";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />

            <div className="grid grid-rows-[auto,1fr] mx-auto mt-32 gap-12 max-w-5xl px-4 pt-32 md:pt-16">
                <div className="max-w-[450px] mx-auto">
                    <h1 className="text-5xl leading-tight text-center font-bold">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                            Servicios
                        </span>
                    </h1>
                </div>
            </div>

            <ServicesCard />
        </>
    );
}

export default ServicesPage;
