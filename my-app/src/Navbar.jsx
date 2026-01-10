import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchIconClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        navigate(`/collection?search=${encodeURIComponent(value)}`);
    };

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <NavLink className="navbar-brand" to="/">
                            <img src="/images/logo.png" alt="" width="60%" />
                        </NavLink>

                        <ul className="nav navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link header-item" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header-item" to="/collection">COLLECTION</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header-item" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header-item" to="/contact">CONTACT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header-item admin px-3" to="/login">Admin Panel</NavLink>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <i className="bi bi-search fs-5 mx-2" onClick={handleSearchIconClick} style={{ cursor: "pointer" }}></i>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login"><i className="bi bi-person fs-4 mx-2"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/cart"><i className="bi bi-bag fs-4 mx-2"></i></NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Search bar shown when icon is clicked */}
                    {searchVisible && (
                        <div className="row mt-2">
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for products..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
