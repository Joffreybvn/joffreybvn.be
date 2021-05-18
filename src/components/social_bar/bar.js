
import * as React from "react";
import {social_bar} from "./bar.module.scss";
import SocialButton from '../social_button/button'

/**
 * Generate a grid-aligned SocialBar with SocialButtons.
 * @param twitter handle Your Twitter handle.
 * @param github username Your Github username.
 * @param medium handler Your Medium handle.
 * @param linkedin username Your LinkedIn username.
 * @param email email Your email address.
 * @param className style Class name containing styles to add to container div.
 * @returns {JSX.Element} SocialBar A SocialBar element containing SocialButtons.
 */
const SocialBar = ({twitter, github, medium, linkedin, email, className}) => {

    /**
     * Count and return the number of provided handles.
     * @returns {number} number The amount of button.
     */
    const buttons = () => {
        let amount = 0

        if (twitter) { amount += 1}
        if (github) { amount += 1}
        if (medium) { amount += 1}
        if (linkedin) { amount += 1}
        if (email) { amount += 1}

        return amount
    }

    // Functions to return a SocialButton component if the associated handler/username is provided.

    const twitter_button = () => {
        if (twitter) {
            return <SocialButton site="twitter" url={`https://twitter.com/${twitter}`} title={`@${twitter}`}/>
        }
    }
    const github_button = () => {
        if (github) {
            return <SocialButton site="github" url={`https://github.com/${github}`} title={`github.com/${github}`}/>
        }
    }
    const medium_button = () => {
        if (medium) {
            return <SocialButton site="medium" url={`https://medium.com/@${medium}`} title={`@${medium}`}/>
        }
    }
    const linkedin_button = () => {
        if (linkedin) {
            return <SocialButton site="linkedin" url={`https://www.linkedin.com/in/${linkedin}/`} title={`in/${linkedin}`}/>
        }
    }
    const email_button = () => {
        if (email) {
            return <SocialButton site="email" url={`mailto:${email}`} title={email}/>
        }
    }

    // Generate and return a SocialBar component

    return (
        <div style={{ gridTemplateColumns: `repeat(${buttons()}, 1fr)` }} className={`${social_bar} ${className}`} >
            {twitter_button()}
            {github_button()}
            {medium_button()}
            {linkedin_button()}
            {email_button()}
        </div>
    )
}

export default SocialBar
