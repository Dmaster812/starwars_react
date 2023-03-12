import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, starWarsPage} from "../utils/constants";


import React, {Component} from 'react';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heroId: 0,
        }
    }

    getHeroId = (id) => {

        this.setState({heroId: id})
    }

    render() {
        switch (this.props.page) {

            case aboutMePage:
                return (
                    <AboutMe heroId={this.state.heroId}/>
                )
            case starWarsPage:
                return (
                    <StarWars/>
                )
            case contactPage:
                return (
                    <Contact/>
                )
            default:
                return (
                    <Home changePage={this.props.changePage} heroId={this.getHeroId}/>
                )
        }
    }
}
export default Main;
