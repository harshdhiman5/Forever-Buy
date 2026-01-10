import React from "react"

export default function About() {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="d-flex align-items-center my-0 justify-content-center">
                            <h4>
                                <span className="custom-text-color">ABOUT </span> US
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <img src="/images/about.png" width="100%" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <p className="mt-4">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.

                            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>

                        <h4>Our Mission</h4>
                        <p>

                            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}