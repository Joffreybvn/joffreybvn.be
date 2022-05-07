
import * as React from "react"
import {social_button} from "./button.module.scss";

import email from './email.svg'
import github from './github.svg'
import kaggle from './kaggle.svg'
import linkedin from './linkedin.svg'
import medium from './medium.svg'
import twitter from './twitter.svg'
import itchio from './itchio.svg'


const icons = {
    "email": email,
    "github": github,
    "kaggle": kaggle,
    "linkedin": linkedin,
    "medium": medium,
    "twitter": twitter,
    "itchio": itchio
}

/**
 * Generate a SocialButton component. This button contain a link to one of the pre-encoded website:
 * Github, Kaggle, LinkedIn, Medium, Twitter or Email. Call it like this:
 * <SocialButton site="twitter" url="https://twitter.com/username" title="@username"/>
 *
 * @param site name Name of the website. Must be one of: github, kaggle, linkedin, medium, twitter, email.
 * @param url url The link of your profile page.
 * @param title handle Your username/handle.
 * @returns {JSX.Element} SocialButton A SocialButton element
 */
const SocialButton = ({ site, url, title }) => {
    const style = {
        backgroundImage: `url(${icons[site]})`
    }

    // Generate and return a SocialButton component

    return (
        <a href={url} title={title} style={style} className={social_button}/>
    )
}
export default SocialButton
