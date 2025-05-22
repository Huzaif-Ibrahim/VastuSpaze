import { CONTACT_INFO } from "../constants"
import { Phone } from "lucide-react"
import { Mail } from "lucide-react"
import { MapPin } from "lucide-react"

const Contact = () => {
  return (
   <section className="py-8 lg:py-16 border-b border-neutral-500">
    <div className="container flex flex-col items-center max-w-6xl mx-auto">
        <h2 className="uppercase text-2xl mb-4 font-medium md:mb-8 md:text-3xl lg:mb-12">Contact us</h2>

        <p className="font-medium text-sm md:text-xl max-w-2xl text-center mb-4 md:mb-8 lg:mb-12 mx-2 md:mx-0">{CONTACT_INFO.text}</p>

        <div className="mt-4 lg:mt-0 px-8 lg:px-0 w-full lg:w-5xl mx-auto flex flex-col space-y-6 lg:flex-row lg:space-y-0 justify-between">

            <div className="phone flex space-x-2">
                <Phone size={20} className="mt-1"/>
                <div className="flex flex-col">
                    <h4 className="font-medium">{CONTACT_INFO.phone.label}</h4>
                    <p className="font-light">{CONTACT_INFO.phone.value}</p>
                </div>
            </div>

            <div className="mail flex  space-x-2">
                <Mail size={20} className="mt-1"/>
                <div className="flex flex-col">
                    <h4 className="font-medium">{CONTACT_INFO.email.label}</h4>
                    <p className="font-light">{CONTACT_INFO.email.value}</p>
                </div>
            </div>

            <div className="locate flex  space-x-2">
                <MapPin size={20} className="mt-1"/>
                <div className="flex flex-col">
                    <h4 className="font-medium">{CONTACT_INFO.address.label}</h4>
                    <p className="font-light">{CONTACT_INFO.address.value}</p>
                </div>
            </div>
            
        </div>
    </div>

   </section>
  )
}

export default Contact