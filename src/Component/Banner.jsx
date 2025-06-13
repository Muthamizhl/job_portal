import React from 'react';
import Slider from 'react-slick';
import './Banner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const banners = [
  'https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg',
  'https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg',
  'https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg'
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {banners.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Banner ${index}`} className="banner-img" />
         </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
