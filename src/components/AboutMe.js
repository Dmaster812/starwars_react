import React, {Component} from 'react';
import {BASE_URL} from "../utils/constants";
import {heroParams} from "../utils/constants";

class AboutMe extends Component {

    constructor(props) {
        super(props);
        {
            this.state = {
                heroID: this.props.heroId,
                arr: []
            }
        }
    }

    componentDidMount() {

            fetch(`${BASE_URL}/v1/peoples/${this.props.heroId}`)
                .then (response => response.json())
                .then (data => {
                     let p = {};
                     heroParams.map((item, index) => {
                         return p[index]=data[item];
                     })

                    this.setState({...this.state, arr: p})

                    })

                .catch((e) => {
                    console.log(e);
                });
    }

    render() {
        return (
            <div>
                {
                    heroParams.map((item, index) => {
                    return <p key={index.toString()}>{item.replace('_',' ').toUpperCase()}:      {this.state.arr[index]}</p>
                })
                }
            </div>)
    }
}

export default AboutMe;