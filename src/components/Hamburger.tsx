export default function Hamburger(isOpen:boolean) {
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