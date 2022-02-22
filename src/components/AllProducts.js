import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import HomeBannerCompo from "./HomeBannerCompo"
import Sidebar from "./Sidebar"
import {Link} from 'react-router-dom'
import RightTopSlider from "./RightTopSlider"
import Message from './Message'
import Loader from './Loader'

import { listProducts } from '../actions/productActions'

const AllProducts = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    console.log(products)

    // Load More Button
    const [visible, setVisible] = useState(6)
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 6)
    }
    // Load More Button

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
        <div className="BannerHomeBox">
            <HomeBannerCompo/>
        </div>
        <div className="HomeContentMainWrapBox">
            <div className="container">
                <div className="row HomeContSidebarExPdd">
                    <div className="col-md-2 col-12">
                        <div className="LeftSidebarHomeWrap">
                            <Sidebar/>
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="HomeAllProductsMainWrap">
                            {loading ? <Loader/> : error ? <h3><Message>{error}</Message></h3> : 
                            <div className="row hmContentProductExPdd">
                                {products.slice(0, visible).map((product) => (
                                    <div className="col-md-4 col-6" key={product.id}>
                                        <div className="HomeAllProductsImgBox">
                                            <Link to={`/product/${product.id}`}>
                                                <img src={product.image} alt={product.altname}/>
                                                <div className="HmAllProductsText">
                                                    <p>{product.title}</p>
                                                    <div className="HmAllProdPriceBox">
                                                        <span className="HmAllProdPricSn">
                                                            <div className="HmAllProductDotTop"></div>
                                                            <div className="HmAllProductDotBottom"></div>
                                                            $ {product.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            }
                        </div>
                        <div className="HomeContAllProdLoadBtn text-center">
                            <button onClick={showMoreItems}>Load More</button>
                        </div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div className="rightTopSidebarSlideHomCont">
                            <RightTopSlider/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AllProducts
