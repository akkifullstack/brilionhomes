import { SIGUNUSED } from "constants";
import axios from 'axios';


export const getHomes=(homes)=>{
    return {
        type:'GET_HOMES',
        homes
    }
}

export const fetchHomes=()=>{
    return dispatch=>{
        return fetch('http://localhost:3000/brilliohomes/getAll').
        then(res=>res.json()).
        then(data=>{dispatch(getHomes(data.homes))})
    }
}

export const addHome=(homes)=>{
    return {
        type:'ADD_HOME',
        homes
    }
}
export const saveHomes=(homeData={})=>{
return dispatch=>{
    const {
        address_Line1='',
        broker_name='',
        broker_company='',
        prop_type='',
        price=0 
    }=homeData
    const homes={address_Line1,broker_name,broker_company,prop_type,price}
    return axios.post('http://localhost:3000/brilliohomes/add',
        homeData
    ).then(homeData=>dispatch(addHome(homeData.homes))
)}
}
