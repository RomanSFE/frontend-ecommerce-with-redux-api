import React from 'react'
import {Link} from 'react-router-dom'

const ShopByCat = () => {
  return (
      <div className="shopbycatmainbox">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="shopbycatmainboxcontent">
                        <div className="shopbycatmainbox-head-sec">
                            <h5>Shop By Categories</h5>
                            <Link to="/">View All</Link>
                        </div>
                        <div className="shopbycatmainbox-cont-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="shopby-cat-single-product">
                                        <Link to="#">
                                            <div className="content-overlay"></div>
                                            <div className="shopby-cat-single-product-img">
                                                <img src={require('../../assets/category-2.jpg')} alt="product"/>
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                Category 1
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="shopby-cat-single-product">
                                        <Link to="#">
                                            <div className="content-overlay"></div>
                                            <div className="shopby-cat-single-product-img">
                                                <img src={require('../../assets/jersey-img.jpg')} alt="product"/>
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                Category 2
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="shopby-cat-single-product">
                                        <Link to="#">
                                            <div className="content-overlay"></div>
                                            <div className="shopby-cat-single-product-img">
                                                <img src={require('../../assets/category-1.jpg')} alt="product"/>
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                Category 3
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="shopby-cat-single-product">
                                        <Link to="#">
                                            <div className="content-overlay"></div>
                                            <div className="shopby-cat-single-product-img">
                                                <img src={require('../../assets/category-3.jpg')} alt="product"/>
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                Category 4
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="shopby-cat-single-product">
                                        <Link to="#">
                                            <div className="content-overlay"></div>
                                            <div className="shopby-cat-single-product-img">
                                                <img src={require('../../assets/category-4.jpg')} alt="product"/>
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                Category 5
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="shopby-cat-single-product">
                                        <Link to="#">
                                            <div className="content-overlay"></div>
                                            <div className="shopby-cat-single-product-img">
                                                <img src={require('../../assets/category-2.jpg')} alt="product"/>
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                Category 6
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="shopby-cat-single-product">
                                        <Link to="#">
                                            <div className="content-overlay"></div>
                                            <div className="shopby-cat-single-product-img">
                                                <img src={require('../../assets/category-3.jpg')} alt="product"/>
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                Category 7
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="shopby-cat-single-product">
                                        <Link to="#">
                                            <div className="content-overlay"></div>
                                            <div className="shopby-cat-single-product-img">
                                                <img src={require('../../assets/category-1.jpg')} alt="product"/>
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                Category 8
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default ShopByCat