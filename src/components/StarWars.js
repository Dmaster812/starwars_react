import React, {Component} from 'react';
import style from './starwars.module.css'


class StarWars extends Component {
    render() {
        const starText = localStorage.getItem('opening_crawl');
        return (
          <section>
                <div className={style.titles}>
                    <div className={style.titlecontent}>
                        {starText}
                    </div>
                </div>
          </section>
        );
    }
}

export default StarWars;