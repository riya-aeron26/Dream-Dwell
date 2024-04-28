import { Category } from "@mui/icons-material";
import { categories } from "../data";
import "../styles/Categories.scss";
import { Link } from "react-router-dom";


const Categories = () => {
    return (
        <div className="categories">
            <h1>Explore Top Categories</h1>
            <p>Discover your perfect getaway with our vacation rental app!
                From cozy cottages to luxurious villas, find your home away from home and immerse yourself in local culture.
                Start your adventure now!
            </p>
            <div className="categories_list">
                {categories?.slice(1.6).map((category, index) => (
                    <Link to = {`/properties/category/${category.label}`}>
                        <div className="category" key={index}>
                            <img src={category.img} alt={category.label} />
                            <div className="overlay"></div>
                            <div className="category_text">
                                <div className="category_text_icon">{category.icon}</div>
                                <p>{category.label}</p>
                            </div>

                        </div>
                    </Link>
                ))}

            </div>

        </div>
    )
}

export default Categories;