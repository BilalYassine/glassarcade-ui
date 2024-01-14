import {motion} from 'framer-motion'
import NavLink from './NavLink'
import FooterLink from './FooterLink'

// Nav will be the component to contain the header navigation at the top - Avatar, Title, and Hamburger Nav Icon
export default function Nav(obj: page) {
    return (
        <nav className="relative flex items-center space-x-8 py-6 ml-6">
            {/* Home */}
            <FooterLink/>
            <p className='text-2xl'>|</p>
            {/* Other Pages */}
            <NavLink page='Games'/>
            <p className='text-2xl'>|</p>
            <NavLink page='Blog'/>
            <p className='text-2xl'>|</p>
            <NavLink page='About Us'/>
            <p className='text-2xl'>|</p>
            <NavLink page='Follow'/>
        </nav>
    )
}