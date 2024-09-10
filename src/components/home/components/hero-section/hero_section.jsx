import "./hero_section.css"

const HeroSection = ()=>{
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="h-s-title">
                    <h1>Hello! I'm</h1>
                </div>
                <div className="h-s-name">Mahdi <span className="last-name-design">Nasri</span></div>
                <div className="h-s-job">Full Stack Web developer | Mern Stack.</div>
                <div>
                    <button className="resume-button">Get Resume <img src="./images/download.svg"/></button>
                </div>
            </div>
            <div className="hero-section-image-content">
                <div className="profile-image">
                    <img src="./images/profile-image.png"/>
                </div>
            </div>
            <div className="round-border">
                <a className="social-link-a one" href="https://www.facebook.com/mahdi.nasri.520/"><img src="./images/fb.svg"/></a>
                <a className="social-link-a two"><img src="./images/twitter.svg"/></a>
                <a className="social-link-a three"><img src="./images/insta.svg"/></a>
            </div>
        </div>
    )
}

export default HeroSection;