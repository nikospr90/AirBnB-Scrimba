import Nav from "../Components/HeroComps/Nav"
import Grid from "../Components/HeroComps/FotoGrid"
import Info from "../Components/HeroComps/Info"

function Hero(){
    return (
        <div className="hero" >
            <Nav />
            <Grid />
            <Info />
        </div>
    )
}

export default Hero;