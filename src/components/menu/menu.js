
import * as React from "react";
import {Link} from "gatsby";
import {menu} from "./menu.module.scss";


/**
 * Slugify a given text: Turn “this URL-optimized string” into “this-url-optimized-string”.
 * Used to transform a menu title into text url.
 * Source: https://mhagemann.medium.com/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
 * @param string string The string to slugify.
 * @return string string the slugified string.
 */
const slugify = (string) => {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}


/**
 * Generate a Menu component. Urls are generated automatically from the given entry names.
 * Usage example: <Menu pages={["Projects", "Libraries", "Writing"]}/>
 *
 * @param pages array Array of navigation names. Used to generated urls.
 * @returns {JSX.Element} Menu A Menu element
 */
const Menu = ({ entries }) => {

    if (entries === undefined) {
        entries = []
    }

    // Generate Link elements from given entries name

    const generate_links = () => {
        const items = []

        // Loop to entries' content
        for (let page of entries) {

            // Create links
            if (Array.isArray(page)) {
                items.push(<Link to={page[1]}>{page[0]}</Link>)
            } else {
                items.push(<Link to={`/${slugify(page)}`}>{page}</Link>)
            }
        }
        return items
    }

    // Return the Menu components

    return (
        <nav className={menu} style={{ gridTemplateRows: `repeat(${entries.length}, 1fr)`}}>
            { generate_links() }
        </nav>
    )
}

export default Menu
