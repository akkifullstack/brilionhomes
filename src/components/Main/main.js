import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from '../header/header';
import Propertylist from '../propertylist/propertylist';

import Listform from '../ListForm/Listform';
import '../Main/main.scss';

class Main extends Component {
render () {
    return (
        <div className="main">
        <Header />
        <Propertylist/>
        </div>
    )
}
}

export default Main

