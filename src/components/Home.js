import React from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

const Home = (props) => {

    return (
        <main className="clearfix">
            <Hero/>
            <Friends changePage={props.changePage} getHeroId={props.heroId}/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;