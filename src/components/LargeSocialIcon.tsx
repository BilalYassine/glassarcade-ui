import { useState } from "react"

export default function LargeSocialIcon(obj: string) {
    const [toggled, setToggled] = useState(false)

    let link = ""
    let image =""
    let altText = ""

    if (obj["app"] == 'Instagram') {
        link = "https://www.instagram.com/glass_arcade_/"
        image = "/images/instagram.png"
        altText = "Instagram"
    }
    else if (obj["app"] == 'Twitter') {
        link = "https://twitter.com/glass_arcade0"
        image = "/images/twitter.png"
        altText = "Twitter"
    }
    else if(obj["app"] == 'Tik Tok'){
        link = 'https://www.tiktok.com/@glass.arcade'
        image = "/images/tiktok.png"
        altText = "Tik Tok"
    }
    else if(obj["app"] == 'Youtube'){
        link = 'https://www.youtube.com/@GlassArcade'
        image = "/images/youtube.png"
        altText = "Youtube"
    }
    else if(obj["app"] == 'Twitch'){
        link = 'https://www.twitch.tv/glassarcade'
        image = "/images/twitch.png"
        altText = "Twitch"
    }
    else if(obj["app"] == 'LinkedIn'){
        link = ''
        image = "/images/linkedin.png"
        altText = "LinkedIn"
    }

    return (
        <div class="w-40 h-40 hover:bg-red-600 rounded-2xl">
            <a href={link}>
                <img src={image} alt={altText}/>
            </a>
        </div>
    )
}