
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Helmet} from "react-helmet";
import SocialBar from '../components/social_bar/bar'
import Menu from '../components/menu/menu'
import {
    header_grid,
    author_picture,
    author_name,
    author_tagline,
    social
} from "./index.module.scss";
import "../css/reset.scss"
import "../css/styles.scss"


const IndexPage = () => {
    return (
        <main>
            <Helmet title="Joffrey Bienvenu" defer={false} />

            {/* Header */}
            <header className={header_grid}>
                <StaticImage
                    src="../images/joffrey_bienvenu.png"
                    alt="Joffrey Bienvenu"
                    layout="fixed"
                    width={260}
                    height={260}
                    placeholder="dominantColor"
                    formats={["auto", "webp", "avif"]}
                    quality={70}
                    className={author_picture}
                />
                <h1 className={author_name}>Joffrey Bienvenu</h1>
                <p className={author_tagline}>
                    Optimizing Computer Vision models @<a href="https://www.aerospacelab.be/">Aerospacelab</a>,
                    developing <a href="https://lidario.readthedocs.io/">softwares</a> in Python, C++ & NodeJS,
                    traveling around Colombia.
                </p>
                <SocialBar
                    twitter="joffreybvn"
                    github="joffreybvn"
                    medium="joffreybvn"
                    linkedin="joffreybvn"
                    email="joffreybvn@gmail.com"
                    className={social}
                />
            </header>

            <hr/>

            {/* Navigation */}
            <Menu entries={[
                ["Publications", "https://blog.joffreybvn.be/"],
                "Projects",
                "About me"
            ]}/>
        </main>
    )
}

export default IndexPage
