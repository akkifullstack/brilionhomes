import React, {Component} from 'react';
import { connect } from 'react-redux';
import {saveHomes} from '../../../src/actions/action';
import '../ListForm/Listform.scss';
import arrows from '../../assets/arrows.png';

 class Listform extends Component {
    state={
        address_Line1:'',
        broker_name:'',
        broker_company:'',
        prop_type:'',
        price:''
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        //  console.log(this.state)
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {address_Line1,broker_name,broker_company,prop_type,price} = this.state
        this.props.saveHomes({address_Line1,broker_name,broker_company,prop_type,price})
    }
    render(){
        return (
            <div className="form-container">
            <nav>
            <div className="row-post">
                <img className="refresh" src={arrows}/>
                <h2>New Posting</h2>
            </div>
            </nav>

            <div className="row-form">
                <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.address_Line1} placeholder="Full address" name="address_Line1" onChange={this.handleChange} />
                <input type="text" value={this.state.broker_name} placeholder="broker name" name="broker_name" onChange={this.handleChange}/>
                <input type="text" value={this.state.broker_company} placeholder="broker company" name="broker_company" onChange={this.handleChange}/>
                <input type="text" value={this.state.prop_type} placeholder="property type" name="prop_type" onChange={this.handleChange}/>
                <input type="text" value={this.state.price} placeholder="price" name="price" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
            </div>
            </div>
        )
    }
}

export default connect(null, { saveHomes})(Listform)