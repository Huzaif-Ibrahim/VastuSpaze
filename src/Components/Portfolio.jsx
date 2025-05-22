import { PORTFOLIO_PROJECTS } from "../constants"

const Portfolio = () => {

    

    return (
        <section className="flex justify-center mt-8 md:mt-16 text-neutral-900 border-b border-neutral-400 ">
            <div className="container flex flex-col items-center justify-center mb-12 lg:mb-16">
                <h2 className="uppercase text-2xl mb-8 font-md md:mb-12 md:text-3xl lg:mb-16">Portfolio</h2>

                <div className="grid gap-8 px-4 lg:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {PORTFOLIO_PROJECTS.map((e)=>{
                        return <div className="rounded-3xl overflow-hidden relative group">
                            <img src={e.image} alt={e.name} className="object-cover h-full w-full transition-transform group-hover:scale-110 duration-500" />

                            <div className="absolute inset-0 backdrop-blur-2xl flex flex-col items-center justify-center space-y-2 transition-opacity duration-500 p-4 opacity-0 group-hover:opacity-100">
                                <h1 className="font-medium text-xl">{e.name}</h1>
                                <p className="text-center">{e.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Portfolio