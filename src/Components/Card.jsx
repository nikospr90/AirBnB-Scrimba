import star from "../assets/icons/star.png";

function Card (props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`/images/${props.coverImg}`} alt="" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"> 
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}

export default Card;