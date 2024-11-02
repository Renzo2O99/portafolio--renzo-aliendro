interface ContainerProps {
    children: React.ReactNode
}
    
const ContainerPortafolio = (props: ContainerProps) => {
    const { children } = props;

    return(
        <div className="portafolioPage min-w-[100vw] min-h-[100vw] py-40 px-[5vw] -mt-48 mx-auto md:px-[10vh]">
            {children}
        </div>
    );
}

export default ContainerPortafolio;