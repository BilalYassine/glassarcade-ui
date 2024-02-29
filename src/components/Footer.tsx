import {motion} from 'framer-motion'
import FooterLink from './FooterLink'

// Nav will be the component to contain the header navigation at the top - Avatar, Title, and Hamburger Nav Icon
export default function Nav() {
    return (
        <footer className="flex bottom-0 items-center space-x-3 py-2 ml-6">
            <FooterLink page='Instagram'/>
            <FooterLink page='Twitter'/>
            <FooterLink page='Twitch'/>
        </footer>
    )
}