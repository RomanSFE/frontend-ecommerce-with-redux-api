import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {Link} from 'react-router-dom'

const RightTopSlider = () => {
    var topdiscount = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className="rightSidebarTopSliderWrap">
            <div className="rightSidebarTopSlideTxt text-center">
                <h3>Top <span>Discount</span></h3>
            </div>
            <Slider {...topdiscount}>
                <div className="TopSidebarProdSingle">
                    <Link to="/">
                            <img src={require('../assets/women-fas-cat-4.png')} alt="logo"/>
                    </Link>
                </div>
                <div className="TopSidebarProdSingle">
                    <Link to="/">
                        <img src={require('../assets/women-fas-cat-5.png')} alt="logo"/>
                    </Link>
                </div>
                <div className="TopSidebarProdSingle">
                    <Link to="/">
                        <img src={require('../assets/women-fas-cat-6.png')} alt="logo"/>
                    </Link>
                </div>
            </Slider>
        </div>
    )
}

export default RightTopSlider
