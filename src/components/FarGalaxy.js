// import React from 'react';

import React, {Component} from 'react';
const URL = `https://sw-info-api.herokuapp.com/v1/films`;

class FarGalaxy extends Component {

       constructor(props) {
           super(props);
           this.state = {
               text: ''
           }
       }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * max+1);
    }



componentDidMount() {

         fetch(`${URL}/${this.getRandomInt(6)}`)
             .then (response => response.json())
             .then (data => {
                 this.setState({text: data.opening_crawl})
             })
        }

        render() {

                return (
                    <p className="m-1">{this.state.text}</p>
                        );
        };
}

export default FarGalaxy;
