import { REVIEWS } from "../constants"

const Reviews = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:py-0 lg:px-0 flex justify-center items-center text-neutral-800 border-b border-neutral-500">
        <div className="container flex flex-col items-center max-w-5xl mx-auto mb-4 lg:mb-16">
            <h2 className="uppercase text-2xl mb-4 font-medium md:mb-8 md:text-3xl lg:mb-16">Reviews</h2>
            <p className="font-medium text-sm mb-4 md:mb-8 lg:mb-16 md:text-lg text-center max-w-2xl lg:max-w-3xl lg:text-xl">{REVIEWS.text}</p>

            <div className="grid gap-x-4 gap-y-8 grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0">
                {REVIEWS.reviews.map((e,indx)=>{
                    return <div key={indx} className="border border-neutral-500 rounded-2xl py-12 px-8 flex flex-col space-y-8 justify-between">
                        <p className="font-semibold">{e.review}</p>
                        <div className="flex space-x-4 justify-center items-center">
                            <img src={e.image} alt={e.name} className="h-12 w-12 rounded-full" />
                            <div className="flex flex-col">
                                <h3 className="font-bold">{e.name}</h3>
                                <p className="text-sm">{e.title}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

    </section>
  )
}

export default Reviews