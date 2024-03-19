import 'bootstrap/dist/css/bootstrap.min.css';
import bookImage1 from '../images/book2.jpg'
import bookImage2 from '../images/book3.jpg'
import bookImage4 from '../images/book4.jpg'
import BookItems from './BookItems';

import Card from './Card';

function Home() {

    const category = [
        {
            img: "https://m.media-amazon.com/images/I/91LsoIWuOmL._SY466_.jpg",
            title: "Mysteries"
        },
        {
            img: "https://m.media-amazon.com/images/I/61-x37JrKwL._SY466_.jpg",
            title: "Horror"
        },
        {
            img: "https://m.media-amazon.com/images/I/61-hMfd7NGL._SY466_.jpg",
            title: "Finance"
        },
        {
            img: "https://m.media-amazon.com/images/I/71pi-C7-oKL._AC_UY327_FMwebp_QL65_.jpg",
            title: "Health"
        },
        {
            img: "https://m.media-amazon.com/images/I/91RTk4zk+QL._AC_UY327_FMwebp_QL65_.jpg",
            title: "Religious"
        },
        {
            img: "https://m.media-amazon.com/images/I/71xWWxjzF7L._AC_UY327_FMwebp_QL65_.jpg",
            title: "Kids"
        }
    ]

    const top_seller = [
        {
            id: 15,
            imgurl: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg",
            name: "Atomic Habits",
            author: "James Clear",
            oldprice: 799,
            newprice: 999
        },
        {
            id: 30,
            imgurl: "https://m.media-amazon.com/images/I/81n6auLS9aS._AC_UY327_FMwebp_QL65_.jpg",
            name: "Three Hours",
            author: "Rosamund Lupton",
            oldprice: 499,
            newprice: 384
        },
        {
            id: 31,
            imgurl: "https://m.media-amazon.com/images/I/61-hMfd7NGL._AC_UY327_FMwebp_QL65_.jpg",
            name: "The Psychology of Money",
            author: "Morgan Housel",
            oldprice: 399,
            newprice: 275
        },
        {
            id: 28,
            imgurl: "https://m.media-amazon.com/images/I/91y46ttZCwL._AC_UY327_FMwebp_QL65_.jpg",
            name: "Shri Ramcharitmanas",
            author: "Goswami Tulsidas",
            oldprice: 665,
            newprice: 450
        },
        {
            id: 32,
            imgurl: "https://m.media-amazon.com/images/I/7113F2UOhqL._AC_UY327_FMwebp_QL65_.jpg",
            name: "Spaceboy",
            author: "Orson Scott Card",
            oldprice: 499,
            newprice: 375
        },
        {
            id: 33,
            imgurl: "https://m.media-amazon.com/images/I/618ZOX7UNNL._AC_UY327_FMwebp_QL65_.jpg",
            name: "The 5 AM Club",
            author: " Robin Sharma",
            oldprice: 399,
            newprice: 240
        }
    ]
    const recommended = [
        {
            id: 34,
            imgurl: "https://m.media-amazon.com/images/I/61je1xWmzoL._AC_UY327_FMwebp_QL65_.jpg",
            name: "Hindu Mythology - Vedic and Puranic",
            author: "W.J. Wilkins",
            oldprice: 349,
            newprice: 249
        },
        {
            id: 35,
            imgurl: "https://m.media-amazon.com/images/I/918G9WKcfpL._AC_UY327_FMwebp_QL65_.jpg",
            name: "Knowledge Encyclopedia - Our Planet Earth",
            author: "DK Publishing",
            oldprice: 849,
            newprice: 649
        },
        {
            id: 36,
            imgurl: "https://m.media-amazon.com/images/I/617htgAlAGL._AC_UY327_FMwebp_QL65_.jpg",
            name: "Yoga & Stress Management",
            author: "Swami Adhyatmananda",
            oldprice: 199,
            newprice: 159
        },
        {
            id: 2,
            imgurl: "https://m.media-amazon.com/images/I/91+t0Di07FL._AC_UY327_FMwebp_QL65_.jpg",
            name: "The Intelligent Investor",
            author: "Benjamin Graham",
            oldprice: 799,
            newprice: 583
        },
        {
            id: 37,
            imgurl: "https://m.media-amazon.com/images/I/81ZeeOjADFL._AC_UY327_FMwebp_QL65_.jpg",
            name: "Meditations",
            author: "Marcus Aurelius",
            oldprice: 199,
            newprice: 139
        },
        {
            id: 30,
            imgurl: "https://m.media-amazon.com/images/I/81n6auLS9aS._AC_UY327_FMwebp_QL65_.jpg",
            name: "Three Hours",
            author: "Rosamund Lupton",
            oldprice: 499,
            newprice: 384
        }
    ]

    return (
        <div className="home-container">
            <div id="carouselExampleIndicators" className="carousel slide"  >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={bookImage4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bookImage1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bookImage2} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h4 className="display-5 p-3 mx-1 my-1">Categories</h4>
            <div className="categories-box" >
                {
                    category.map((book, index) => (
                        <Card key={index} img={book.img} title={book.title}></Card>
                    ))
                }
            </div>

            <h4 className="display-5 p-3 mx-1 my-1">Top-Seller</h4>
            <div className="categories-box">
                {
                    top_seller.map((book) => (
                        <BookItems key={book.id} data={book}></BookItems>
                    ))
                }
            </div>


            <h4 className="display-5 p-3 mx-1 my-1">Recommended</h4>
            <div className="categories-box">
                {
                    recommended.map((book) => (
                        <BookItems key={book.id} data={book}></BookItems>
                    ))
                }
            </div>
        </div>
    )
}
export default Home;
