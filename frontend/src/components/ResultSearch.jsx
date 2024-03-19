import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchBook } from "../hooks/searchBook";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from "../context/useCart";

function ResultSearch() {
    const param = useParams()
    const cart = useCart()

    const [data, setData] = useState()
    const [error, setError] = useState(null); // State to manage error message

    useEffect(() => {
        setError(null); // Reset error state on each new search
        searchBook(param.book)
                .then((res) => {
                    if(res === "error"){
                        setError("Not Found!!")
                    }
                    setData(res)
                })
    }, [param])

    if (error) {
        return (
            <div className="h1 text-center">{error}</div> // Render error message
        )
    }

    if (!data) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const handleOnClick = () => {
        cart.setItems([...cart.items, {imgurl: data.imgurl, name: data.name, newprice: data.newprice, quantity: 1}])
    }

    return (
        <div className="book-details-container d-flex flex-wrap justify-content-center p-3">
            <img src={data.imgurl} alt="" className="shadow p-3 mb-5 bg-body-tertiary rounded" />
            <div className="details shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="title d-flex align-items-center">
                    <h2>Title: </h2>
                    <h1 className="mx-3">{data.name}</h1>
                </div>
                <div className="author d-flex align-items-center">
                    <h2>Author: </h2>
                    <h1 className="mx-3">{data.author}</h1>
                </div>
                <div className="desc">
                    <h2>Description:</h2>
                    <h4> {data.description}</h4>
                </div>
                <div className="price d-flex align-items-center m-1">
                    <h2>Price:</h2>
                    <h1 className="mx-2">₹{data.newprice}</h1>
                    <div className="d-flex align-items-center m-1">
                        <h1>M.R.P</h1>
                        <h1 className="text-decoration-line-through mx-2">{data.oldprice}</h1>
                        <h1>&#40;{Math.round((data.oldprice - data.newprice) * 100 / data.oldprice)}%&#41;</h1>
                    </div>
                </div>
                <button className="btn btn-success my-3" onClick={handleOnClick}>Add to cart</button>
            </div>
        </div>
    )
}
export default ResultSearch;
