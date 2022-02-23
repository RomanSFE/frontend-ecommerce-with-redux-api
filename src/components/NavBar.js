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
                                <img src={require('../assets/pnglogo.png')} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-5 col-5">
                        <div className="navbarMenuBox">
                            <nav>
                                <ul>
                                    <li><Link to="/">Men <span><i className="fas fa-angle-down"></i></span></Link>
                                    <ul>
                                        <li><Link to="/">T-Shirt</Link></li>
                                        <li><Link to="/">Jeans</Link></li>
                                        <li><Link to="/">Polo T-Shirt</Link></li>
                                    </ul>        
                                    </li>
                                    <li><Link to="/">Women <span><i className="fas fa-angle-down"></i></span></Link>
                                    <ul>
                                        <li><Link to="/">Watch</Link></li>
                                        <li><Link to="/">Bag</Link></li>
                                        <li><Link to="/">Shoes</Link></li>
                                    </ul>        
                                    </li>
                                    <li><Link to="/">Kids <span><i className="fas fa-angle-down"></i></span></Link>
                                        <ul>
                                            <li><Link to="/">Shirt</Link></li>
                                            <li><Link to="/">Toys</Link></li>
                                            <li><Link to="/">Cloth</Link></li>
                                        </ul>        
                                    </li>
                                    <li><Link to="/">Beauty</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-4">
                        <div className="navbarRightBoxWeb text-right">
                            <ul>
                                <li><i className="fas fa-search"></i></li>
                                <li>
                                <div className="userloginsectionx">
                                    {userInfo ? (
                                        <NavDropdown title={<i className="fas fa-user"></i>}  id="username">
                                            <button onClick={logoutHandler}>
                                                Logout
                                            </button>
                                        </NavDropdown>
                                    ) :
                                    <Link to="/login">
                                         <i className="fas fa-user"></i> <span> Sign In</span>
                                    </Link>
                                    }
                                </div>
                                </li>
                                <li><Link to="/"><i className="fas fa-heart"></i></Link></li>
                                <li><Link to="/"><i className="fas fa-shopping-cart"></i></Link></li>
                            </ul>
                            {/* <div className="userloginsection">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
