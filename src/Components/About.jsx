import AboutImg from '../assets/About.webp'

const About = () => {
  return (
    <section className='my-8 flex flex-col items-center justify-center lg:my-16 text-neutral-800 border-b border-neutral-500'> 
        <div className="container flex flex-col items-center mb-8 lg:mb-16">
            <h2 className="uppercase text-2xl mb-8 font-md md:mb-12 md:text-3xl lg:mb-16">About</h2>
            <div className="about-img px-4 max-w-5xl mb-4 lg:px-0 lg:mb-8">
                <img src={AboutImg} alt="about-img" className='object-cover w-full h-full' />
            </div>
            <p className='max-w-5xl px-4 text-lg md:text-2xl lg:text-3xl'>
                At Vastuspaze, we beleve in transforming houses into dream homes. with a passion for design and a commitment to quality, our team of skilled professionals has been dedicated to delivering exceptional renovation services ffor over a decade. We specialized in creating beautiful, functional spaces that reflect our clients unique tastes and lifestyles. From modern kitchens and luxurious bathrooms to serene outdoor living areas and cozy is to enhance the beauty and functionality of your home, making it a place where you can truely thrive. 
            </p>
        </div>
    </section>
  )
}

export default About