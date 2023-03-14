import { Link } from "react-router-dom"
import { ExternalLink } from "react-external-link"
import "./about.css"
import will from "../Assets/will.jpeg"
import rmr from "../Assets/rmr.jpeg"

export default function About() {
    return (
        <div className="about">
            <h2>About</h2>
            <p className="par"><Link to="/">YÚ Tub</Link> is a clone of the well known video sharing platform <ExternalLink href="https://www.youtube.com/" target="_blank"><span>YouTube</span></ExternalLink>. This project was created as part of the <ExternalLink href="https://www.pursuit.org/" target="_blank"><span>Pursuit Felloship</span></ExternalLink> curriculum. This project highlights and enforces skills learned in class about git and Github collaboration work as programmers, as well as technical skills using React.js along with API mastery.</p>

            <br />
            <br />


            <h3>Meet the Engineers...</h3>
            <section className="team">
                <div className="will">
                    <img src={will} alt="Wil Santos" />
                </div>
                <div className="info">
                    <h4>Will Santos</h4>
                    <span>Full Stack Web Developer</span>
                    <span>Pursuit Fellow 9.4 N&W</span>
                    <p>Github: <ExternalLink href="https://github.com/Wilsantos1975" target="_blank">@Wilsantos1975</ExternalLink></p>
                    <p>Linkedin: <ExternalLink href="https://www.linkedin.com/in/fausto-wilghen-santos-9083a9112/" target="_blank">Wil Santos</ExternalLink></p>
                </div>

                <hr />

                <div className="info">
                    <h4>Raydelys Morrobel Reyes</h4>
                    <span>Full Stack Web Developer</span>
                    <span>Pursuit Fellow 9.4 N&W</span>
                    <p>Github: <ExternalLink href="https://github.com/arerimr" target="_blank">@arerimr</ExternalLink ></p>
                    <p>Linkedin: <ExternalLink href="https://www.linkedin.com/in/raydelysmr" target="_blank">Raydelys M R</ExternalLink></p>
                </div>
                <div className="raydelys">
                    <img src={rmr} alt="Raydelys MR" />
                </div>
            </section>
        </div>
    )
}