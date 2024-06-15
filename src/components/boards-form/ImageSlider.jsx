import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles.css';
import { BASE_URL } from "../../config/BaseUrl";

function ImageSlider({images}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = images.length;

    const NextArrow = ({ onClick }) => {
        return (
            currentSlide < totalSlides - 1 && (
                <div className="slick-arrow slick-next" onClick={onClick}>
                    &#9654;
                </div>
            )
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            currentSlide > 0 && (
                <div className="slick-arrow slick-prev" onClick={onClick}>
                    &#9664;
                </div>
            )
        );
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
            <Slider {...settings}>
                {
                  images.map((image,index) => (
                        <img src={image} alt="boardImage" key={index}/>
                ))
                }
            </Slider>
    );
}

export default ImageSlider;