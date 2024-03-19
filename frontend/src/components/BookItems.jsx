import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function BookItems({ data }) {
    return (
        <Link to={`/getbyid/${data.id}`}key={data.id} className="book-items shadow p-3 bg-body-tertiary rounded">
            <img src={data.imgurl} alt="" />
            <div className="details">
                <h4>{data.name}</h4>
                <h6>by {data.author}</h6>
                <div className="price d-flex justify-content-center">
                    <h4>₹{data.newprice}</h4>
                    <div className="d-flex align-items-center">
                        <h6>M.R.P</h6>
                        <h6 className="text-decoration-line-through">{data.oldprice}</h6>
                        <h6>&#40;{Math.round((data.oldprice-data.newprice) * 100 / data.oldprice)}%&#41;</h6>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default BookItems