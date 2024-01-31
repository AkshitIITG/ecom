import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from '../../../Data/MainCarousel/mainCarouselData';

const MainCarousel = () => {
    const items = mainCarouselData.map(item => <img src={item.image} className="cursor-pointer" role='presentation'/>)

    return(
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableButtonsControls
        />
    )
};

export default MainCarousel;