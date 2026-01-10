import React from "react"

export default function Contact() {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="d-flex align-items-center my-0 justify-content-center">
                            <h4>
                                <span className="custom-text-color">CONTACT </span> US
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-5">
                        <img src="/images/contact.png" width="100%" alt="" />
                    </div>
                    <div className="col-lg-5  d-flex align-items-center">
                        <div>
                            <h4>Our Store</h4>
                            <p className="mt-4">
                                <ul className="list-unstyled">
                                    <li>54709 Willams Station</li>
                                    <li>Suite 350, Washington, USA</li>
                                    <li className="mt-4">Tel: +91-6230716826</li>
                                    <li>Email: try.harsh5@gmail.com</li>
                                </ul>
                            </p>

                            <h4>Careers at Forever</h4>
                            <p className="mt-3">
                                Learn more about our teams and job openings.
                            </p>

                            <button className="btn btn-outline-dark mt-4">Explore Jobs</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}