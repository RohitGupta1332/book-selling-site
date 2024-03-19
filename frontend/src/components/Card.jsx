import { Link } from "react-router-dom"

function Card({ img, title }) {
    return (

        <Link className="card-container" to={`/categories/${title.toLowerCase()}`} >
            <img src={img} className="card-img-top" alt="..." />
            <h5 className="display-6" style={{fontSize: "clamp(12px, 1.5vw, 20px)"}}>{title}</h5>
        </Link>
    )
}
export default Card