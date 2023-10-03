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
            <div>
                <a href="/games">Games</a>
            </div>
            <div>
                <a href="/blog">Blog</a>
            </div>
            <div>
                <a href="/about">About</a>
            </div>
            
            {/* Toggle */}
            <div onClick={() => setToggled((prevToggle) => !prevToggle)} className="space-y-1 cursor-pointer">
                <span className="block h-0.5 w-8 bg-black"></span>
                <span className="block h-0.5 w-8 bg-black"></span>
                <span className="block h-0.5 w-8 bg-black"></span>
            </div>
        </nav>
    )
}