
import * as React from "react"
import {
    card_wrapper,
    card_header,
    card_icon,
    card_image,
    card_subtitle,
    tag_cloud,
    one_tag_container,
    two_tag_container,
    three_tag_container,
    card_links,
    link_github,
    link_website,
    link_docs,
    link_package
} from "./card.module.scss";

import data_science from "./data_science.svg"
import software from "./software.svg"


const icons = {
    "data_science": data_science,
    "software": software,
}

const clean_url = (url) => {

    // Remove http, https and www
    url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")

    // Remove the last character if its a "/"
    if (url.substr(-1) === "/") {
        url = url.slice(0, -1)
    }
    return url
}


const Card = ({icon, title, description, image, githubURL, websiteURL, docsURL, packageURL, tags}) => {

    const generate_links = () => {
        let items = []

        const urls = {
            "website": websiteURL,
            "docs": docsURL,
            "package": packageURL,
            "github": githubURL,
        }
        const links = {
            "github": link_github,
            "website": link_website,
            "docs": link_docs,
            "package": link_package
        }
        const containers = {
            1: one_tag_container,
            2: two_tag_container,
            3: three_tag_container
        }

        for (let [classname, url] of Object.entries(urls)) {
            if (url !== undefined) {
                items.push(<a href={url} className={links[classname]}>{clean_url(url)}</a>)
            }
        }
        items = items.slice(0, 3)

        if (items.length !== 0) {
            return (
                <div className={`${card_links} ${containers[items.length]}`}>
                    {items}
                </div>
            )
        }
    }

    const generate_tag_cloud = () => {
        let items = []

        if (tags !== undefined) {
            for (let tag of tags) {
                items.push(<div>{tag}</div>)
            }
        }

        if (items.length !== 0) {
            return (
                <div className={tag_cloud}>
                    {items}
                </div>
            )
        }
    }

    return (
        <article className={card_wrapper}>

            {/* Header */}
            <div className={card_header}>
                <div className={card_icon} style={{backgroundImage: `url(${icons[icon]})`}}/>
                <h3>{title}</h3>
                <div className={card_image} style={{backgroundImage: `url(${image})`}}/>
                <div className={card_subtitle}>{description}</div>

                {/* Tag cloud */}
                {generate_tag_cloud()}
            </div>

            {/* External links */}
            {generate_links()}

        </article>
    )
}

export default Card