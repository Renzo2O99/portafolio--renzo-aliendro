interface ContainerProps {
    children: React.ReactNode
}
    
const ContainerPortafolio = (props: ContainerProps) => {
    const { children } = props;

    return(
        <div className="max-w-[90vw] pb-40 mx-auto mt-40 md:pb-0 md:px-6">
            {children}
        </div>
    );
}

export default ContainerPortafolio;