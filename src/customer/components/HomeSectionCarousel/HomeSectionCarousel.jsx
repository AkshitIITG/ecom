import React, {useState} from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { Button } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
}

const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = data.slice(0,10).map(item => <HomeSectionCard product={item}/>)
    const slidePrev = () => {
        setActiveIndex(prevState => prevState-1);
    }

    const slideNext = () => {
        setActiveIndex(prevState => prevState+1);
    }
    
    const onSlideChange = (e) => {
        setActiveIndex(e.item);
    }
    console.log(activeIndex);
    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    activeIndex={activeIndex}
                    responsive={responsive}
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={onSlideChange}
                />
                {activeIndex !== items.length -5 && <Button onClick={slideNext} className="z-50 bg-white" variant='contained' sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: "white" }}>
                    <ChevronLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}

                {activeIndex !== 0 && <Button onClick={slidePrev} className="z-50 bg-white" variant='contained' sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(-90deg)', bgcolor: "white" }}>
                    <ChevronLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel