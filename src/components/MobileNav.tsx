import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import NavLinks from './NavLinks.astro'
import FooterLink from './FooterLink'

export default function MobileHeader(){
    const [isOpen, setIsOpen] = useState(false);

    return(
    <div>
        <button onClick={() => setIsOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel className="fixed top-0 left-0 h-screen w-screen bg-[#323247] border-l-primaryRed border-l-[20px] border-r-primaryBlue border-r-[20px] flex flex-col z-[1001]">
                <button onClick={() => setIsOpen(false)}>
                    <svg xmlns="https://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="#ffffff" 
                        className="w-12 h-12 fixed top-[18px] right-[32px] hover:stroke-primaryRed duration-300">
                        <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col items-center space-y-8 my-auto mx-auto">
                    <a href="/">
                        <div class="w-[200px] h-[200px]">
                            <img src="/images/GA-Logo.svg" alt="Glass Arcade"/>
                        </div>
                    </a>
                    <a href="/games" class="font-poppins text-white text-3xl hover:text-primaryRed duration-300">Games</a>

                    <a href="/about" class="font-poppins text-white text-3xl hover:text-primaryRed duration-300">About Us</a>
                    <ul class="relative flex items-center mb-0">
                        <li class="mx-2">
                            <a class="font-montserrat text-neutral-100" href={"https://www.instagram.com/glass_arcade_/"} >
                                <div>
                                    <svg xmlns="https://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram text-white hover:text-primaryRed transition-colors">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                    </svg>                          
                                </div>
                            </a>
                        </li>
                        <li class="mx-2">
                            <a class="font-montserrat text-neutral-100" href={"https://twitter.com/glassarcadedev"} >
                                <div>
                                    <svg xmlns="https://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter text-white hover:text-primaryRed transition-colors">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li class="mx-2">
                            <a class="font-montserrat text-neutral-100" href={"https://www.twitch.tv/glassarcade"} >
                                <div>
                                    <svg xmlns="https://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitch text-white hover:text-primaryRed transition-colors">
                                        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li class="mx-2">
                            <a class="font-montserrat text-neutral-100" href={"https://www.linkedin.com/company/glass-arcade/"} >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin text-white hover:text-primaryRed transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>                     
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>  
            </Dialog.Panel>
        </Dialog>
    </div>
    );

    function switchButtons(){
        if(isOpen){
            return(
                <svg xmlns="https://www.w3.org/2000/svg" 
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
                <svg xmlns="https://www.w3.org/2000/svg" 
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