import React from 'react'
import image from '../assets/images/me.jpg'
import resume from '../assets/files/cv.docx'
import {  FaLinkedin, FaTwitter , FaGithub } from 'react-icons/fa'

const Home = () => {
    return (
            <main>
                <div className={"page-center"} id={"home"}>
                    <img src={image} alt="" className={"home-image"}/>
                    <div className={"info"}>
                        <p className={"intro"}>hi there! i'm</p>
                        <p className={"name"}>Stas <span>Tismenetski</span></p>
                        <p className={"desc"}>A <span>Full stack developer</span> who loves developing web applications</p>
                        <div className={"btn-social"}>
                            {/*<button className={"btn"}>Resume</button>*/}
                            <a className={"btn"} href={resume} download={"cv.docx"}>Resume</a>
                            <ul className={"social"}>
                                <li>
                                    <a href={"https://twitter.com/tismenetski"} target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                                </li>
                                <li>
                                    <a href={"https://github.com/tismenetski"} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                                </li>
                                <li>
                                    <a href={"https://www.linkedin.com/in/stas-tismenetski-8a4429101/"} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default Home