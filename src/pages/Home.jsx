import React from 'react';
import './home.css';
import GameSwiper from '../components/GameSwiper';

function Home({ games }) {
    return (
        <section id='home' className="home active">
            <div className="conteiner-fluid">
                <div className="row">
                    <GameSwiper games={games} />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="sectionTittle">
                            Games on promotion
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Home
