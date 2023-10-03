import {motion} from 'framer-motion'
import { useState } from "react"

// Nav will be the component to contain the header navigation at the top - Avatar, Title, and Hamburger Nav Icon
export default function Nav() {
    const [toggled, setToggled] = useState(false)

    return (
        <nav className="relative mx-8 flex justify-between items-center pt-6 pb-4 font-medium md:mx-16 lg:mx-32">
            {/* Image */}
            <div>
                <img src="/images/wizguy.png" alt="Wizguy Picture" width="62" height="72"/>
            </div>

            {/* Links */}
            <a class="font-montserrat text-neutral-100" href="/games">Games</a>
            <a class="font-montserrat text-neutral-100" href="/blog">Blog</a>
            <a class="font-montserrat text-neutral-100" href="/about">About</a>
            
            {/* Toggle */}
            <div onClick={() => setToggled((prevToggle) => !prevToggle)} className="space-y-1 cursor-pointer">
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
            </div>
        </nav>
    )
}