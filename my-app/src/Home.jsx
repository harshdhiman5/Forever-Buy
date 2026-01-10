import React from "react";
import LatestCollection from "./LatestCollection";
import BestSeller from "./BestSeller";
import Service from "./Service";
import Subscribee from "./Subscribe";
import Footer from "./Footer";


export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row border border-secondary">
                    <div className="col-lg-6 px-0 d-flex align-items-center">
                        <div className="box  mx-auto" >
                            <div className="d-flex align-items-center my-0">
                                <p className="upperhead me-2"></p>
                                <p className="">OUR BESTSELLERS</p>
                            </div>
                            <div className="heading">
                                <h1>Latest Arrivals</h1>
                            </div>
                            <div className="d-flex align-items-center my-0">
                                <p className="">SHOP NOW</p>
                                <p className="upperhead ms-2"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 px-0">
                        <img src="images/hero_img.png" alt="" width="100%" />
                    </div>
                </div>
            </div>
            {/* SHOPPING CARD */}
            <LatestCollection></LatestCollection>
            {/* BEST SELLER */}

            <BestSeller></BestSeller>

            {/* SERVICES */}
            <Service></Service>

            {/* SUBSCRIBE */}
            <Subscribee></Subscribee>
            {/* FOOTER */}




        </>
    )
}