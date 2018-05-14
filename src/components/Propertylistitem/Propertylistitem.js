import React from 'react';
import { connect } from 'react-redux';
import house from '../../assets/house.jpg';
const PropertyListItem = ({ dispatch, address_Line1, state, city, zipcode, broker_name, broker_company, house_photo }) => (
    <div className="property-list">
        <div className="propertyimg">
            <img src={house_photo == '' ? house : house_photo} />
            <div className="propertydetail">
                <a href="#" className="btn btn-rent">Rent</a>
                <a href="#" className="btn btn-new">New</a><br />
                <p>{address_Line1}</p>
                <p>{state},{city} - {zipcode}</p>
                <p>{broker_name}|{broker_company}</p>
            </div>
        </div>
    </div>
)

export default connect()(PropertyListItem);