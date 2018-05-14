import React,{Component} from 'react';
import {connect} from 'react-redux';
import '../propertylist/propertylist.scss';
import { fetchHomes } from '../../actions/action';
import Propertylistitem from '../Propertylistitem/Propertylistitem';
import Listform from '../ListForm/Listform';
class Propertylist extends Component {
    componentDidMount = () => {
        return this.props.fetchHomes();
    }

    render(){
        const message ="No Data found";
        return (
            <div className="main-container">
                <header>
                    <nav>
                        <div className="row">
                            <p className="logo">Search Result</p>
                            <ul className="filter">
                                <li><b>FILTER</b>&nbsp;</li>
                                <li>Rent</li>
                                <li>Sell</li>
                                <li>Lease</li>
                            </ul>
                        </div>
                    </nav>
                 <div className="row-prop"> 
                    {this.props.homes.length == 0 ? message : this.props.homes.map((data) => {
                                        return (
                                        <Propertylistitem {...data}/>
                                        )
                                    })}
    
                          
                    </div>
                </header>
                <Listform/>
            </div>

        )
      
    }
   
}

const mapStateToProps = (state, props) => {
    return {
        homes:state.homes
    }
}

export default connect(mapStateToProps,{fetchHomes})(Propertylist);