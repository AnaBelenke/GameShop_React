import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './gameSwiper.css'

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import GameSlide from './GameSlide';

function GameSwiper({ games }) {
    const [active, setActive] = useState(false)

    const handleToggleVideo = () => {
        setActive(!active)
    }

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            navigation={true}
            loop={true}
            centeredSliders={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 35,
                stretch: 200,
                depth: 250,
                modifier: 1,
                slideShadowns: true,
            }}
            // Autoplay={{
            //     delay: 2500, 
            //     disableOnInteraction: false,
            // }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="gameSwiper"
        >
            {games.map(game => (
                <SwiperSlide key={game._id}>
                    <GameSlide
                        game={game}
                        active={active}
                        toggleVideo={handleToggleVideo}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default GameSwiper
