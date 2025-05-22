import { HERO_CONTENT } from "../constants"

const HeroSection = () => {
  return (
    <div className="mt-20 flex flex-col items-center space-y-6 border-b border-neutral-400 py-16">
        <h1 className="uppercase font-bold text-4xl mb-10 md:text-8xl lg:text-9xl text-neutral-900">{HERO_CONTENT.title}</h1>

        <p className="text-neutral-900 font-semibold text-sm sm:text-lg">{HERO_CONTENT.subtitle}</p>

        <div className="px-4 h-140 w-full md:px-6 lg:px-0">
            <img src={HERO_CONTENT.image} alt="hero-img" className="rounded w-full h-full object-cover object-center" />
        </div>
    </div>
  )
}

export default HeroSection