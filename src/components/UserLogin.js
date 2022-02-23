import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'

import {login} from '../actions/userActions'
import NavBar from './NavBar'

const UserLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const history = useNavigate();

    const userLogin = useSelector(state => state.userLogin)
    const {  loading, error, userInfo} = userLogin

    useEffect(() => {
        if(userInfo) {
            history('/')
        }
    }, [userInfo, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    }

    return (
        <>
        <NavBar/>

        <div className="user-form-main-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="user-form-content-bx text-center">
                            <div className="user-form-head">
                                <h4>User Sign <span>In</span></h4>
                            </div>
                            <div className="user-form-main-wrap">

                                {error && <h3><Message>{error}</Message></h3> }
                                {loading && <Loader/> }

                                <form onSubmit={submitHandler}>
                                    <div className="user-form-sng-input">
                                        <input 
                                            type="text"
                                            placeholder="Enter Username"
                                            name="username" 
                                            value={username}
                                            required
                                            onChange={(e) => setUsername(e.target.value) }
                                         />
                                    </div>
                                    <div className="user-form-sng-input">
                                        <input 
                                            type="password"
                                            placeholder="Enter Password"
                                            name="password" 
                                            value={password}
                                            required
                                            onChange={(e) => setPassword(e.target.value) }
                                         />
                                    </div>
                                    <div className="user-form-sub-btn">
                                        <button type="submit">Log In</button>
                                    </div>
                                </form>

                                <div className="userfomr-new-user-reg">
                                    New Customer ? <span><Link to="/">Register Now</Link></span>
                                </div>
                            </div>

                            <div className="example-sec">
                                <h5>User Info From API</h5>
                                <p>User Name: <span>mor_2314</span></p>
                                <p>Password: <span>83r5^_</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default UserLogin