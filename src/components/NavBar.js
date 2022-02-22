import React from "react"
import { NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../actions/userActions'


const NavBar = () => {
    const dispatch = useDispatch()

    // User Login
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <div className="navbarMainMenuRwap">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-3">
                        <div className="navbarLogoBox">
                            <Link to="/">
                                <img src={require('../assets/logo-white.png')} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-7">
                        <div className="navbarSearchBox">
                            <input type="search" placeholder="Search Here.." /> <span><button><i className="fas fa-search"></i></button></span>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                        <div className="navbarRightBoxWeb text-right">
                            <div className="userloginsection">
                                {userInfo ? (
                                    <NavDropdown title={userInfo.token} id="username">
                                        <button onClick={logoutHandler}>
                                            Logout
                                        </button>
                                    </NavDropdown>
                                ) :
                                <Link to="/login">
                                    <span>Sign In</span>
                                </Link>
                                }
                            </div>

                            <div className="navbarRightBxIcon">
                                <i className="fas fa-bars"></i>
                                <div className="SidebarNavWrapBox">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                all in one tabs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products">
                                                some
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/category">
                                                some
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products">
                                                some
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products">
                                                    Ladys
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/products">
                                                    Toys
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
