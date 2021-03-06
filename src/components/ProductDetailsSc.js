import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import NavBar from './NavBar'
import Loader from "./Loader"
import Message from "./Message"
import ShopByCat from "./sections/ShopByCat"
import Meta from "./Meta"

import { ListProductDetails } from '../actions/productActions'
import TrendingProducts from "./sections/TrendingProducts"

const ProductDetailsSc = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(ListProductDetails(id))
  }, [dispatch, id])

    return (
        <>
        <NavBar/>
        {/* Product Details Section Start */} 
        <div className="productDetailsMainBox">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              {loading ? <Loader/> : error ? <h3><Message>{error}</Message></h3> : 
                <div className="productDetailsMainWrap">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                      <Meta title={product.title} description={product.description}/>
                      <div className="productLgImg">
                        <img src={product.image} alt={product.altname}/>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="productDetailsText">
                          <h1>{product.title}</h1>
                          <h5>{product.category}</h5>
                          <div className="prod-desc">
                            <p>{product.description}</p>
                          </div>
                          <p><strong>$ {product.price}</strong></p>
                      </div>
                      <div className="productAddtoCartBuyBtn">
                        <ul>
                          <li><button>Add To Bag</button></li>
                          <li><Link to="">Purchase Now</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
        {/* Product Details Section End */}

        <div className="trendingproduct-main-hm">
          <TrendingProducts/>
        </div>

        <div className="shopbycate-main-box-hm">
          <ShopByCat/>
        </div>

        </>
    )
}
export default ProductDetailsSc
