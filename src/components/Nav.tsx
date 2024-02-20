
import FooterLink from './FooterLink'
import MobileNav from './MobileNav'

// Nav will be the component to contain the header navigation at the top - Avatar, Title, and Hamburger Nav Icon
export default function Nav(obj: page) {
    return (
        <nav class="flex bg-blue-400">
                {/*Group of icon links to socials*/}
                <ul class="relative lg:flex hidden items-center lg:w-[33%] lg:ml-6 lg:mb-0 bg-purple-400">
                    <li class="mx-1">
                        <FooterLink page='Instagram'/>
                    </li>
                    <li class="mx-1">
                        <FooterLink page='Twitter'/>
                    </li>
                    <li class="mx-1">
                        <FooterLink page='Tik Tok'/>
                    </li>
                    <li class="mx-1">
                        <FooterLink page='Youtube'/>
                    </li>
                    <li class="mx-1">
                        <FooterLink page='Twitch'/>
                    </li>
                </ul>
                {/*Icon Component that will serve as a link back to the home page*/}
                <div class="flex justify-center lg:items-center lg:w-[33%] w-full bg-green-400">
                    <a href="/">
                        <div class="w-[75px] h-[75x] lg:w-[125px]">
                            <img src="/images/GA-Logo.svg" alt="Glass Arcade"/>
                        </div>
                    </a>
                </div>              
                {/*Group of links to other pages on the site*/}
                <ul class="lg:flex hidden lg:items-center lg:justify-end lg:mr-6 lg:w-[33%] bg-red-400">
                    <li class="mx-4 lg:my-0">
                        <a href="/games" class="font-montserrat text-white text-xl hover:text-primaryRed duration-300">Games</a>
                    </li>
                    <li class="mx-4 lg:my-0">
                        <a href="/about" class="font-montserrat text-white text-xl hover:text-primaryRed duration-300">About Us</a>
                    </li>
                    {/* <li class="mx-4 lg:my-0">
                        <a href="/blog" class="font-montserrat text-white text-xl hover:text-primaryRed duration-300">Blog</a>
                    </li> */}
                    <li class="ml-4 lg:my-0">
                        <a href="/follow" class="font-montserrat text-white text-xl hover:text-primaryRed duration-300">Follow the Journey</a>
                    </li>
                </ul> 
                <MobileNav client:visible/>
            </nav> 
    )
}