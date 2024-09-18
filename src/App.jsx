import './App.css'
import Hero from './Components/Hero'
import Card from "./Components/Card"
import data from './data'

function App() {
  const cards = data.map((card) => {
    return(
      <Card 
        key={card.id}
        {...card}
        // title={card.title}
        // description={card.description}
        // price={card.price}
        // coverImg={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // location={card.location}
        // openSpots={card.openSpots}
      />
    )})
  return (
    <>
      <Hero />
      <div className="card--list">
        {cards}
      </div>
    </>
  )
}

export default App
