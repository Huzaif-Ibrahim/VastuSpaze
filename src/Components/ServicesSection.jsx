import { SERVICES_CONTENT } from "../constants"

const ServicesSection = () => {
  return (
    <section className="mt-16 pb-2 text-neutral-900 border-b border-neutral-400 lg:pb-12 flex justify-center">
        <div className="services-container flex flex-col items-center">
            <h2 className="uppercase text-2xl text-center mb-8 font-md md:mb-12 md:text-3xl lg:mb-16">our home renovations services</h2>

            {SERVICES_CONTENT.map((e,indx)=>{
                return <div key={indx} className='mb-12 flex flex-col space-y-4 px-4 md:px-6 md:space-y-4 lg:px-0 lg:flex-row lg:mb-4 sm:space-y-2 sm:mb-16 '>
                    <div className={`service-img w-full lg:w-1/2 ${indx%2===0?'':'lg:order-2'}`}>
                        <img src={e.image} alt={e.alt} className="rounded w-full"/>
                    </div>

                    <div className={`services-info w-full flex flex-col sm:space-y-2 lg:w-1/2 ${indx%2===0?'lg:pl-4':'lg:pr-4'}`}>
                        <h6 className="text-lg font-medium sm:text-2xl">{e.title}</h6>
                        <p className="text-md font-medium sm:text-lg">{e.description}</p>
                    </div>
                </div>
            })}
        </div>
    </section>
  )
}

export default ServicesSection