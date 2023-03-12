
import Navigation from "./Navigation";
import React, {Component} from 'react';
import {homePage} from "../utils/constants";

class Header extends Component {


    render() {
        return (
            <div>
                <header className="rounded-top">
                    <Navigation changePage={this.props.changePage}/>
                    {/*<h1 className="text-center pt-5 pb-3"> </h1>*/}
                    {(this.props.page === homePage)?
                        <h1 className="text-center pt-5 pb-3">Luke Skywalker</h1>:
                        <h1 className="text-center pt-5 pb-3"></h1>
                    }
                </header>
            </div>
        );
    }
}

export default Header;

