import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function RelatedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="container mt-5 pb-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="d-flex align-items-center my-0 justify-content-center">
                        <h2><span className="custom-text-color">RELATED</span> PRODUCTS</h2>
                        <p className="upperhead ms-2 mt-2"></p>
                    </div>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p> */}
                </div>
            </div>
            <div className="row mt-3">
                <Card wid="20%" data={products.slice(0, 5)} /> {/* Display only 3 products */}
            </div>
        </div>
    );
}
