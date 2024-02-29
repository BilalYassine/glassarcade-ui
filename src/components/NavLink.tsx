import { useState } from "react"

export default function NavLink(obj: string) {
    const [toggled, setToggled] = useState(false)

    let link = ""
    let text = ""

    if (obj["page"] == 'Games') {
        link = "/games"
        text = "Games"
    }
    else if (obj["page"] == 'Blog') {
        link = "/blog"
        text = "Blog"
    }
    else if (obj["page"] == 'About Us') {
        link = "/about"
        text = "About Us"
    }

    return (
        <a class="font-montserrat text-neutral-950 text-2xl hover:text-primaryRed duration-300" href={link}>
            {text}
        </a>
    )
}