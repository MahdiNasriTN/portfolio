import HeroSection from "./components/hero-section/hero_section";
import Navbar from "./components/navbar/navbar";
import "./home.css"



const Home = ()=>{
    return (
        <div>
            <Navbar/>
            <HeroSection />
        </div>
    )
}

export default Home;