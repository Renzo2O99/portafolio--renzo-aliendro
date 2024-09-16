import Image from "next/image";

const ServicesCard = () => {
    return (
        <div className="py-16 md:px-6 lg:px-8 xl:px-12">  
            <div className="container m-auto px-6 text-white md:px-12">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    <div className="bg-indigo-950 font-semibold rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-purple-500">Graphic Design</h3>
                            <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="#" className="block font-medium italic text-blue-500">Know more</a>
                        </div>
                        <Image src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>
                    <div className="bg-indigo-950 font-semibold rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-purple-500">UI Design</h3>
                            <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="#" className="block font-medium italic text-blue-500">Know more</a>
                        </div>
                        <Image src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>
                    <div className="bg-indigo-950 font-semibold rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-purple-500">UX Design</h3>
                            <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                            <a href="#" className="block font-medium italic text-blue-500">Know more</a>
                        </div>
                        <Image src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;