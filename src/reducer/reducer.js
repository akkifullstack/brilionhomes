const homeDefaultState=[]
export default (state=homeDefaultState, action)=>{
    switch (action.type){
        case 'ADD_HOME':
            return [
                ...state,
                action.homes
            ]
        case 'GET_HOMES':
             return action.homes
        default: 
             return state
        
    }
}