import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-4 px-4 md:px-8 lg:px-0 flex justify-center items-center text-neutral-800">
        <div className="container flex justify-between">
            <div className="icons flex space-x-2">
                <a href="/"><Facebook stroke="black" fill="black" size={15} /></a>
                <a href="/"><Twitter stroke="black" fill="black" size={15}/></a>
                <a href="/"><Instagram stroke="black" size={15}/></a>
            </div>

            <p className="font-light text-sm">© 2025 VastuSpaze. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer