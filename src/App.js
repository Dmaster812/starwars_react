import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
                activePage: ''
        }
    }

    changeActivePage = (page) => {
        this.setState({activePage: page});
    }

    render() {
        return (
            <div className='container-fluid'>
                <Header page={this.state.activePage} changePage={this.changeActivePage}/>
                <Main changePage={this.changeActivePage} page={this.state.activePage}/>
                <Footer/>
            </div>
        );
    }
}
export default App;
