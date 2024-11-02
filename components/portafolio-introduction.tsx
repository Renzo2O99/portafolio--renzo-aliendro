import ContainerPage from "./container";

const PortafolioIntroduction = () => {
    return (
        <div className="w-full max-w-6xl px-4 mx-auto mt-40 md:pb-0 md:px-6">
            <div className="flex flex-col justify-center mb-16 md:mb-32">
                <h1 className="font-bold text-4xl mb-12 pt-16 mt-12 leading-tight text-center md:text-6xl md:mt-8">
                    Mis Últimos 
                    {' '}
                    <span className="text-secondary font-bold">
                        Proyectos Realizados
                    </span>
                </h1>

                <p className="font-bold text-center text-2xl my-4 md:text-4x">
                    Flowbite helps you connect with friends, family and communities of people who share your interests.
                </p>
            </div>
        </div>
    )
}

export default PortafolioIntroduction;