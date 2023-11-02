import { useState } from "react"

export default function NavLink(obj: string) {
    const [toggled, setToggled] = useState(false)

    let link = "/"
    let image = "/images/wizguy.png"
    let altText = "WizGuy Picture"
    let text = ""
    let width = "62"

    if (obj["page"] == 'Games') {
        link = "https://www.youtube.com/watch?v=xvFZjo5PgG0"
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

    return (
        <a class="font-montserrat text-neutral-100" href={link} >
            <div>
                <img src={image} alt={altText} width={width} height="72"/>
                {text}
            </div>
        </a>
    )
}