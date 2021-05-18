
import * as React from "react";
import {summary} from "./summary.module.scss";

const Summary = ({ entries }) => {

    if (entries === undefined) {
        entries = {}
    }

    const generate_links = () => {
        const items = []

        // Loop to entries' content
        for (let [id_, title] of Object.entries(entries)) {

            items.push(
                <a>{title}</a>
            )
        }

        return items
    }

    // Return the Summary components

    return (
        <nav className={summary} style={{ gridTemplateRows: `repeat(${entries.length}, 1fr)`}}>
            {generate_links()}
        </nav>
    )
}

export default Summary
