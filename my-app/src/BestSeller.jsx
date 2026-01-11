import React, { useEffect, useState } from "react";
import API_URL from "./config";
import Card from "./Card";

export default function BestSeller() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/product`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="container mt-5 pb-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="d-flex align-items-center my-0 justify-content-center">
                        <h2><span className="custom-text-color">BEST</span> SELLER</h2>
                        <p className="upperhead ms-2 mt-2"></p>
                    </div>
                    <p>This section contains the best selling clothes of our E-Commerce Website - FOREVER BUY</p>
                </div>
            </div>
            <div className="row mt-3">
                <Card wid="20%" data={products.slice(0, 5)} /> {/* Display only 3 products */}
            </div>
        </div>
    );
}
