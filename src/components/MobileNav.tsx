import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import NavLinks from './NavLinks.astro'
import FooterLink from './FooterLink'
import Hamburger from './Hamburger';

export default function MobileHeader(){
    const [isOpen, setIsOpen] = useState(false);

    return(
    <>
        <button onClick={() => setIsOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.75} 
                stroke="#ffffff" 
                className="w-8 h-8 fixed top-[18px] right-[32px] hover:stroke-primaryRed duration-300">
                <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel className="fixed top-0 left-0 h-screen w-screen bg-[#131313] border-r-primaryBlue border-r-8 flex flex-col">
                <button onClick={() => setIsOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="#ffffff" 
                        className="w-8 h-8 fixed top-[18px] right-[32px] hover:stroke-primaryRed duration-300">
                        <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col items-center space-y-8 my-auto mx-auto">
                    <a href="/">
                        <div class="w-[125px] h-[125x]">
                            <img src="/images/GA-Logo.svg" alt="Glass Arcade"/>
                        </div>
                    </a>
                        <a href="/games" class="font-montserrat text-white text-xl hover:text-primaryRed duration-300">Games</a>

                        <a href="/about" class="font-montserrat text-white text-xl hover:text-primaryRed duration-300">About Us</a>
                    {/* <li>
                        <a href="/blog" class="font-montserrat text-white text-xl hover:text-primaryRed duration-300">Blog</a>
                    </li> */}
                    <ul class="relative flex items-center mb-0">
                        <li class="mx-1">
                            <FooterLink page='Instagram'/>
                        </li>
                        <li class="mx-1">
                            <FooterLink page='Twitter'/>
                        </li>
                        <li class="mx-1">
                            <FooterLink page='Twitch'/>
                        </li>
                    </ul>
                </div>  
            </Dialog.Panel>
        </Dialog>
    </>
    );

    function switchButtons(){
        if(isOpen){
            return(
                <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="#ffffff" 
                        className="w-8 h-8 fixed top-[18px] right-[32px] hover:stroke-primaryRed duration-300">
                        <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6 18 18 6M6 6l12 12" />
                </svg>
            )
        }
        else{
            return(
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.75} 
                    stroke="#ffffff" 
                    className="w-8 h-8 hover:stroke-primaryRed duration-300">
                    <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            )
        }  
    }
}