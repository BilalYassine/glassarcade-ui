import wizguy from "../images/wizguy.png"
import {motion} from 'framer-motion'
import { useState } from "react"

// Nav will be the component to contain the header navigation at the top - Avatar, Title, and Hamburger Nav Icon
export default function Nav() {
    const [toggled, setToggled] = useState(false)
    return (
        <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
            {/* Header Line */}
            <svg
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                width="200"
                height={4}
                viewBox="0 0 360 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 2L428 2" stroke="#282828" strokeLinecap="round" strokeWidth={2}/>
            </svg>

            {/* Image */}
            <div>
                <img src={wizguy.src} alt="Wizguy Picture" width="62" height="72"/>
            </div>
            
            {/* Toggle */}
            <div onClick={() => setToggled((prevToggle) => !prevToggle)} className="space-y-1 cursor-pointer">
                <span className="block h-0.5 w-8 bg-black"></span>
                <span className="block h-0.5 w-6 bg-black"></span>
                <span className="block h-0.5 w-8 bg-black"></span>
            </div>
        </nav>
    )
}