import { useEffect, useState } from 'react'
import { getAllBooks } from '../hooks/getAllBooks'
import { getByCategory } from '../hooks/getByCategory'
import BooksItems from './BookItems'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

function AllBooks() {

    const [data, setData] = useState(null)

    const param = useParams()
    const category = param.category;

    useEffect(() => {
        // Fetch data based on the category parameter
        if (category && category !== "allbooks") {
            getByCategory(category)
                .then((res) => { setData(res) })
                .catch(error => console.error("Error fetching books by category:", error));
        } else {
            getAllBooks()
                .then(data => {
                    setData(data);
                })
                .catch(error => console.error("Error fetching all books:", error));
        }
    }, [category]);

    if (!data) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className="books-container">
            {
                data && data.map(book => (
                    <BooksItems key={book.id} data={book}></BooksItems>
                ))
            }
        </div>
    )
}
export default AllBooks