import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(""); // State to track selected size

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  const addToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart."); // Show alert if size is not selected
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1, size: selectedSize });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size); // Set selected size
  };

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={`http://localhost:5000/${product.image}`}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <h2>{product.title}</h2>

          {/* ⭐ Review Stars using Bootstrap Icons */}
          <div className="mt-2">
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star text-warning"></i>
            <span className="ms-2 text-muted">(120 reviews)</span>
          </div>

          <h3 className="mt-2">₹{product.price}</h3>
          <p className="mt-3">{product.description || "No description available."}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Type:</strong> {product.type}</p>

          {/* Size Selection */}
          <div className="mt-4">
            <label className="form-label"><strong>Select Size:</strong></label>
            <div className="d-flex flex-wrap gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`btn border rounded-0 px-4 py-2 ${selectedSize === size ? 'btn-primary' : ''}`}
                  style={{ minWidth: "60px" }}
                  onClick={() => handleSizeSelection(size)} // Update size on click
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="btn btn-dark text-white mt-4" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-12">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                <b>Description</b>
              </button>
            </li>
          </ul>
          <div className="tab-content border" id="myTabContent">
            <div className="tab-pane fade show active p-3" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. <br></br> <br></br>
              E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts />
    </div>
  );
}
