import React, {Component} from 'react';
import style from './contact.module.css'
import {BASE_URL} from "../utils/constants";
import * as Utils from './Utils'

class Contact extends Component {

        constructor(props) {
            super(props);
            this.state = {

                planets: []
            }
        }

    componentDidMount() {

            let arr = [];
        const date = localStorage.getItem('heroInfo_timestamp');
        const heroInfo = localStorage.getItem('heroInfo');

        if(heroInfo && !Utils.timeStampCheck(date))  {
                                            this.setState( {planets: JSON.parse(heroInfo)});
        }
        else {
                fetch(`${BASE_URL}/v1/planets`)
                    .then (response => response.json())
                    .then (data => {

                        Object.entries(data).forEach((item, index) => {
                             arr.push(item[1].name);
                        })
                        this.setState({...this.state, planets: arr})
                        localStorage.setItem('heroInfo', JSON.stringify(arr));
                        localStorage.setItem('heroInfo_timestamp', JSON.stringify(new Date().getTime()));
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
         }

    render() {

        return (
            <div className={style.container}>
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                            <label htmlFor="planet">Planet</label>
                            <select id="planet" name="planet">

                                {this.state.planets.map((planet, index) => {
                                    return (<option key={index.toString()} value={planet.toString()}>{planet}</option>)
                                })}

                            </select>

                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something..">
                                 </textarea>
                            <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Contact;