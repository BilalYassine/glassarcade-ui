import {motion} from 'framer-motion'
import NavLink from './NavLink'
import FooterLink from './FooterLink'

// Nav will be the component to contain the header navigation at the top - Avatar, Title, and Hamburger Nav Icon
export default function Nav(obj: page) {
    return (
        <nav className="lg:flex lg:justify-between">
            <div className="flex justify-between items-center">
                <div className="flex items-center ml-6 py-4">
                    <FooterLink/>
                </div>
                <div className="w-12 lg:hidden block mr-6">
                    <img src="/images/hamburger.svg" alt="menu" onClick="Menu(this)"/>
                </div>
            </div>
            <ul className="lg:flex lg:justify-end 
            lg:items-center lg:mr-6 z-[-1] lg:z-auto lg:static
            absolute bg-white w-full pl-8 lg:pl-0 
            lg:opacity-100 opacity-0 top-[400px] transition-all 
            ease-in duration-500">
                <li className="mx-4 my-6 lg:my-0">
                    <a href="/games" className="font-montserrat text-neutral-950 text-2xl hover:text-primaryRed duration-300">Games</a>
                </li>
                {/* <li>
                    <p className="font-montserrat text-neutral-950 text-2xl">|</p>
                </li> */}
                <li className="mx-4 my-6 lg:my-0">
                    <a href="/about" className="font-montserrat text-neutral-950 text-2xl hover:text-primaryRed duration-300">About Us</a>
                </li>
                {/* <li>
                    <p className="font-montserrat text-neutral-950 text-2xl">|</p>
                </li> */}
                <li className="mx-4 my-6 lg:my-0">
                    <a href="/blog" className="font-montserrat text-neutral-950 text-2xl hover:text-primaryRed duration-300">Blog</a>
                </li>
                {/* <li>
                    <p className="font-montserrat text-neutral-950 text-2xl">|</p>
                </li> */}
                <li className="mx-4 my-6 lg:my-0">
                    <a href="/follow" className="font-montserrat text-neutral-950 text-2xl hover:text-primaryRed duration-300">Follow the Journey</a>
                </li>
                <ul className="relative flex items-center mb-6 lg:mb-0">
                    <li className="mx-1">
                        <FooterLink page='Instagram'/>
                    </li>
                    <li className="mx-1">
                        <FooterLink page='Twitter'/>
                    </li>
                    <li className="mx-1">
                        <FooterLink page='Tik Tok'/>
                    </li>
                    <li className="mx-1">
                        <FooterLink page='Youtube'/>
                    </li>
                    <li className="mx-1">
                        <FooterLink page='Twitch'/>
                    </li>
                </ul>
                
            </ul> 
        </nav>
    )
}