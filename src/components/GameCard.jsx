import React from 'react'
import './gameCard.css'
import GameRating from './GameRating'

function GameCard({ game }) {
    return (
        <div className='col-xl-3 col-lg-4 col-md-6'>
            <img src={game.img} alt={game.title} className='img-fluid' />
            <a href="#"><i className="bi bi-heart-fill"></i></a>
            <div className="gameFeature">
                <span className="gameType">
                    {game.level}
                </span>
                <GameRating rating={game.rating} />
            </div>
        </div>
    )
}

export default GameCard
