import React from 'react';
import style from './footer.module.css'

const Footer = () => {

    return (
        <footer className="rounded-bottom">
            <div className={style.footer}>
                <p className="border border-light rounded-pill btn btn-danger">Send me an
                    <span className={style.email}> email</span></p>
            </div>
        </footer>
    );
};

// style={{position: "fixed", bottom: 0}}



export default Footer;
