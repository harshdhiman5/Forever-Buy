import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <>
            {props.data?.map((item, index) => (
                <div className="col-lg-3" style={{ width: props.wid }} key={index}>
                    <div className="card border-0 rounded-0">
                        <Link to={`/product/${item._id}`} className="text-decoration-none text-dark">
                            <div className="card-img custom-card rounded-0">
                                <img
                                    src={`http://localhost:5000/${item.image}`}
                                    className="img-fluid card-image-hover"
                                    alt={item.title}
                                />
                            </div>
                            <div className="card-content">
                                {/* <p style={{ fontSize: ".875rem" }} className="mt-2">
                                    {item.title}
                                </p>
                                <p>$ {item.price}</p> */}
                                <ul className="list-unstyled">
                                    <li style={{ fontSize: ".875rem" }} className="mt-2"> {item.title}</li>
                                    <li style={{fontWeight:"500"}}>&#8377; {item.price}</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
