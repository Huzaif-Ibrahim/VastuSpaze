import { useState } from 'react'
import logo from '../assets/logo.webp'
import { LINKS } from '../constants'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'

const Navbar = () => {

    const [isMenu, setIsMenu] = useState(false)

  return (
    <nav className='z-10 w-full py-6 border-b border-neutral-400 bg-transparent backdrop-blur-sm fixed top-0 left-0'>
        <div className="nav-container px-4 flex items-center justify-between max-w-6xl mx-auto md:px-6 lg:px-0">
            <div className="nav-logo" >
                <img src={logo} alt="logo" className='h-4' />
            </div>
                
            <div className="nav-options">
                <span className='lg:hidden' onClick={()=>setIsMenu(!isMenu)}>{isMenu?<X color='black' size={30} className='cursor-pointer'/>:<Menu color='black' size={30} className='cursor-pointer'/>}</span>

                {/* For Desktop View */}
                <ul className='hidden lg:flex space-x-4 font-semibold'>
                    {LINKS.map((e,indx)=>{
                        return <li key={indx}>
                            <a href={e.link} className='text-neutral-900'>{e.name}</a>
                        </li>
                    })}
                </ul>
            </div>
        </div>

        {isMenu && (
                <div className="mobile-options mt-8 px-4 md:px-6">
                    <ul className='flex flex-col space-y-6 font-medium text-xl'>
                        {LINKS.map((e,indx)=>{
                            return <li key={indx}>
                                <a href={e.link} onClick={()=>setIsMenu(false)} className='font-light'>{e.name}</a>
                            </li>
                        })}
                    </ul>
                </div>
            )}
    </nav>
  )
}

export default Navbar