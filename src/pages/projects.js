
import * as React from "react"
import Summary from '../components/summary/summary'
import Card from "../components/project_card/card";
import {
    content,
    card_wrapper
} from "./projects.module.scss"
import "../css/reset.scss"
import "../css/styles.scss"

import lidarImage from "../images/projects/lidar.png"
import writingImage from "../images/projects/writing.png"
import drawingImage from "../images/projects/drawing.png"
import realestateImage from "../images/projects/realestate.png"
import wineImage from "../images/projects/wine.png"
import zimmoImage from "../images/projects/zimmo.png"
import chatbotImage from "../images/projects/chatbot.png"
import blocksImage from "../images/projects/blocks.png"


const ProjectsPage = () => {

    return (
        <main>

            {/* Header */}
            <header>
                <h1>Projects</h1>
                <Summary entries={{
                    "data_science": "Data science",
                    "software": "Software development"
                }}/>
            </header>
            <hr/>

            <div className={content}>

                {/* Data science */}
                <div className={card_wrapper}>
                    <h2 id="data_science">Data science</h2>
                    <Card
                        icon="data_science"
                        title="Wallonia.ml"
                        description="
                        Discover Wallonia in 3D in the browser. Price prediction
                        and 3D visualization of any walloon property. Based on 100GB+
                        of Lidar data, contains 1.3 million of houses."
                        image={lidarImage}
                        tags={["Python", "Javascript", "Flask", "Scikit-Learn", "ThreeJS", "Docker", "Backblaze"]}
                        githubURL="https://github.com/Joffreybvn/wallonia-ml"
                        websiteURL="https://wallonia.ml/"
                    />
                    <Card
                        icon="data_science"
                        title="Deepwriting"
                        description="
                        Deep digit recognition in a web app. Based on a custom CNN model and
                        the mnist dataset."
                        image={writingImage}
                        tags={["Python", "Keras", "Streamlit", "Pandas", "NumPy"]}
                        githubURL="https://github.com/Joffreybvn/deep-detect-handwriting"
                        websiteURL="https://deepwriting.joffreybvn.be/"
                    />
                    <Card
                        icon="data_science"
                        title="Deepdrawing"
                        description="
                        Drawings recognition in a web app. Based on Google's doodle dataset.
                        Variant of the Deepwriting project above, but created with PyTorch."
                        image={drawingImage}
                        tags={["Python", "PyTorch", "Streamlit", "Pandas", "NumPy"]}
                        githubURL="https://github.com/Joffreybvn/deep-detect-drawings"
                        websiteURL="https://deepdrawing.joffreybvn.be/"
                    />
                    <Card
                        icon="data_science"
                        title="Data analysis: Real estate"
                        description="
                        Deep analysis and interpretation of a 50.000 entries dataset about
                        real estate in Belgium. Discorver on a map the best places to buy
                        the house of your dreams."
                        image={realestateImage}
                        tags={["Python", "Jupyther", "Pandas", "NumPy", "MatplotLib", "Seaborn"]}
                        githubURL="https://github.com/Joffreybvn/real-estate-data-analysis"
                    />
                    <Card
                        icon="data_science"
                        title="Data analysis: Red wine"
                        description="
                        Complete analysis of a red wine quality dataset. Learn the criterias
                        that influence the quality of red wine, and find out which are the
                        best one."
                        image={wineImage}
                        tags={["Python", "Colab", "Pandas", "MatplotLib"]}
                        githubURL="https://github.com/Joffreybvn/real-estate-data-analysis"
                    />
                    <Card
                        icon="data_science"
                        title="Zimmo.be scraping pipeline"
                        description="
                        Scraping bot to retrieve the 100.000+ sale offers from zimmo.be.
                        This bot clean and return a CSV dataset, ready for data analysis
                        and model creation."
                        image={zimmoImage}
                        tags={["Python", "Selenium", "Pandas"]}
                        githubURL="https://github.com/Joffreybvn/bot-scrape-zimmo"
                    />
                </div>

                {/* Software */}
                <div className={card_wrapper}>
                    <h2 id="software">Software development</h2>
                    <Card
                        icon="software"
                        title="Discord Bot"
                        description="
                        Discord bot made for BeCode: automate attendances and send alarms to
                        Becode's students. Made for the Turing 4.22 class."
                        image={chatbotImage}
                        tags={["Python", "MongoDB", "Flask", "Discord.py"]}
                        githubURL="https://github.com/Joffreybvn/alan-turing"
                    />
                    <Card
                        icon="software"
                        title="Minecraft plugin"
                        description="
                        A Minecraft mod and plugin to compress and uncompress blocks like
                        Stone, Cobblestone, Wood, Sand, ... Support multiple Mineacraft version."
                        image={blocksImage}
                        tags={["Java", "Bukkit"]}
                        githubURL="https://github.com/Joffreybvn/CompressedBlocks"
                    />
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage
