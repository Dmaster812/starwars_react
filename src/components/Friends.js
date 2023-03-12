import React from 'react';
import {aboutMePage, friends} from "../utils/constants";
import Friend from "./Friend";

const Friends = (props) => {
    return (
        <section onClick={(e)=> {
                props.getHeroId(e.target.id);
                props.changePage(aboutMePage);
            }} className="float-end m-2 w-50 row border border-light no-gutters">
            <h3 className="col-12 text-center">Friends</h3>
            {friends.map((item, index) => <Friend id={index} friend={item} key={index}/>)}
        </section>
    );
};

export default Friends;
