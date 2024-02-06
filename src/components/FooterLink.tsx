import { useState } from "react"

export default function FooterLink(obj: string) {
    const [toggled, setToggled] = useState(false)

    let link = "/"
    let image = "/images/GA-Logo.svg"
    let altText = "Glass Arcade"
    let text = ""
    let width = "200"
    let height = "200"

    if (obj["page"] == 'Games') {
        link = "/games"
        image = "/images/gaming-icon.png"
        altText = "Games Icon"
        text = "Games"
        width = "62"
    }
    else if (obj["page"] == 'Blog') {
        link = "/blog"
        image = "/images/blog-icon.png"
        altText = "Blog Icon"
        text = "Blog"
        width = "52"
    }
    else if (obj["page"] == 'About') {
        link = "/about"
        image = "/images/about-icon.png"
        altText = "About Icon"
        text = "About"
        width = "48"
    }
    else if (obj["page"] == 'Instagram') {
        link = "https://www.instagram.com/glass_arcade_/"
        image = "/images/instagram.png"
        altText = "Instagram"
        text = ""
        width = "40"
        height = "40"
    }
    else if (obj["page"] == 'Twitter') {
        link = "https://twitter.com/glass_arcade0"
        image = "/images/twitter.png"
        altText = "Twitter"
        text = ""
        width = "40"
        height = "40"
    }
    else if(obj["page"] == 'Tik Tok'){
        link = 'https://www.tiktok.com/@glass.arcade'
        image = "/images/tiktok.png"
        altText = "Tik Tok"
        text = ""
        width = "40"
        height = "40"
    }
    else if(obj["page"] == 'Youtube'){
        link = 'https://www.youtube.com/@GlassArcade'
        image = "/images/youtube.png"
        altText = "Youtube"
        text = ""
        width = "40"
        height = "40"
    }
    else if(obj["page"] == 'Twitch'){
        link = 'https://www.twitch.tv/glassarcade'
        image = "/images/twitch.png"
        altText = "Twitch"
        text = ""
        width = "40"
        height = "40"
    }

    return (
        <a class="font-montserrat text-neutral-100" href={link} >
            <div>
                <img className="hover:translate-y-[-2px]"src={image} alt={altText} width={width} height={width}/>
                {text}
            </div>
        </a>
    )
}