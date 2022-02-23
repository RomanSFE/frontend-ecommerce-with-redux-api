import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import Message from '../Message'
import Loader from '../Loader'
import { listProducts } from '../../actions/productActions'

const TrendingProducts = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

  return (
      <div className="trendingproducts-mainbox">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="trendingproducts-boxcontent">
                        <div className="shopbycatmainbox-head-sec">
                            <h5>Trending Clothes</h5>
                            <Link to="/">View All</Link>
                        </div>
                        {loading ? <Loader/> : error ? <h3><Message>{error}</Message></h3> :
                        <div className="trendingproducts-cont-item">
                            {products.slice(0, 4).map((product) => (
                            <div className="row">
                                <div className="col-md-3 col-12">
                                    <div className="trending-prod-img">
                                        <img src={product.image} alt={product.altname}/>
                                    </div>
                                </div>
                                <div className="col-md-9 col-12">
                                    <div className="trending-prod-cont">
                                        <Link to={`/product/${product.id}`}>
                                            <h1>{product.title}</h1>
                                        </Link>
                                        <div className="trndprod-desc">
                                            <p>{product.description}</p>
                                        </div>
                                        <p>$ {product.price}</p>
                                        <div className="star-rating-sec-box">
                                            <ul>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><span>4.4</span> <span>(157)</span></li>
                                                <li className="trnd-ht-sec"><i className="fas fa-heart"></i></li>
                                            </ul>
                                        </div>
                                        <button>Add To Bag</button>
                                    </div>
                                </div>
                                
                            </div>
                            ))}
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default TrendingProducts