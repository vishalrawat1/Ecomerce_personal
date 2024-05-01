import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    // console.log(user.name);
    const function1 = () => {
        // console.log("sdfas");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">GOCart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Toprated">Top Rated</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action 1</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action 2</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            {
                            user.isadmin && (

                                <ul>
                                    <Link className="nav-link" to="/Additems" aria-current="page">Additems</Link>
                                </ul>

                            )
                        }
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {!user.name && (
                            <ul>
                                <Link className="nav-link" to="/login" aria-current="page" onClick={function1}>Login</Link>
                            </ul>

                        )}
                        {
                            !user.name && (

                                <ul>
                                    <Link className="nav-link" to="/register" aria-current="page">registration</Link>
                                </ul>

                            )
                        }
                        {
                            user.name && (

                                <ul>
                                    <Link className="nav-link" to="/Logoutuser" aria-current="page">Logout</Link>
                                </ul>

                            )
                        }


                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
