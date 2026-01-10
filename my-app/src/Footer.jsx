import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <img src="images/logo.png" alt="" width="25%" />
                        <p className="mt-3" style={{ fontSize: ".875rem" }}>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h5 className="text-black">COMPANY</h5>
                                <ul className="list-unstyled">
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>Home</Link></li>
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>About</Link></li>
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>Delivery</Link></li>
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h5 className="text-black">GET IN TOUCH</h5>
                                <ul className="list-unstyled">
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>+91-6230716826</Link></li>
                                    <li><Link to="http://mail.google.com/" className="text-decoration-none" style={{ fontSize: ".875rem" }}>try.harsh5@gmail.com</Link></li>
                                    <li><Link to="https://www.instagram.com" className="text-decoration-none" style={{ fontSize: ".875rem" }}>Instagram</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border border-start-0 border-end-0 border-bottom-0 py-3">
                <div className="row text-center">
                    <p>Copyright 2025@ harshdhiman.dev - All Right Reserved.</p>
                </div>
            </div>
        </>
    )
}