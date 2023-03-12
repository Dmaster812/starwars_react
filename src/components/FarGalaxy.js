import React, {Component} from 'react';
import {BASE_URL} from "../utils/constants";
import * as Utils from './Utils'

class FarGalaxy extends Component {

       constructor(props) {
           super(props);
           this.state = {
               text: '.... LOADING STORY',
               id: 1
           }
       }

componentDidMount() {

           const date = localStorage.getItem('opening_crawl_timestamp');
           const opening_crawl = localStorage.getItem('opening_crawl');

    if(opening_crawl && !Utils.timeStampCheck(date))  {

                                                this.setState({text: opening_crawl});
    }
    else {
         fetch(`${BASE_URL}/v1/films/${Utils.getRandomInt(6)}`)
             .then (response => response.json())
             .then (data => {
                 localStorage.setItem('opening_crawl', data.opening_crawl)
                 localStorage.setItem('opening_crawl_timestamp', JSON.stringify(new Date().getTime()));
                 this.setState({text: data.opening_crawl});
             })
             .catch((e) => {
                 console.log(e);
                 this.setState({text: '... LOADING ERROR'});
             });
           }
        }

        render() {
                    return (<p key={this.state.id.toString()} className="m-1">{this.state.text}</p>);
         };
}

export default FarGalaxy;
