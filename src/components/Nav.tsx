import {motion} from 'framer-motion'
import NavLink from './NavLink'

// Nav will be the component to contain the header navigation at the top - Avatar, Title, and Hamburger Nav Icon
export default function Nav() {
    return (
        <nav className="relative flex justify-between items-center pt-6 pb-4 font-medium md:mx-16 lg:mx-32">
            {/* Home */}
            <NavLink/>

            {/* Other Pages */}
            <NavLink page='Games'/>
            <NavLink page='Blog'/>
            <NavLink page='About'/>
        </nav>
    )
}