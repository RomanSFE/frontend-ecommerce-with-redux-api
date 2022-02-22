import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import NavBar from './NavBar'
import Loader from "./Loader"
import Message from "./Message"
import ShopByCat from "./sections/ShopByCat"

import { ListProductDetails } from '../actions/productActions'

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
                    <div className="col-md-5 col-sm-6 col-12">
                      <div className="productLgImg">
                        <img src={product.image} alt={product.altname}/>
                      </div>
                      <div className="productListSmimage">
                        <ul>
                          <li><img src={require('../assets/global-shoppng-12.png')} alt="logo"/></li>
                          <li><img src={require('../assets/jersey-img.jpg')} alt="logo"/></li>
                          <li><img src={require('../assets/women-fas-cat-6.png')} alt="logo"/></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-6 col-12">
                      <div className="productDetailsText">
                          <h1>{product.title}</h1>
                          <p>Price : <strong>$ {product.price}</strong></p>
                          <h5>Category : <strong> {product.category}</strong></h5>
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

        {/* Product Desc  */}
        <div className="prodDescMainBox">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="prodDescMainBoxCont">
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Desc End  */}

        <div className="shopbycate-main-box-hm">
          <ShopByCat/>
        </div>

        </>
    )
}
export default ProductDetailsSc
