import { useState } from 'react'
import { Dialog } from '@headlessui/react'

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
                className="w-8 h-8 hover:stroke-primaryRed duration-300">
                <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel className="fixed top-0 left-0 h-screen w-screen bg-blue-700 flex flex-col justify-center items-center">

            </Dialog.Panel>
        </Dialog>
    </>
    );
}