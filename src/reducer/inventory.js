import { SUPPILER_FETCHED_DATA,SUPPILER_EDIT_FETCHED_DATA,TOOL_FETCHED_DATA,CUSTOMER_FETCHED_DATA,CUSTOMER_EDIT_FETCHED_DATA,
TOOL_EDIT_FETCHED_DATA} from 'action/inventory';

const initialState = {
  	suppilerList:[],
    toolList:[],
    customerList:[],
    suppilerEditList:[],
    customerEditList:[],
    toolEditList:[],
}

export default function(state = initialState,action = {}) {
	switch(action.type) {
    case SUPPILER_FETCHED_DATA: {
      return {...state, suppilerList: action.data}
    }  
    case SUPPILER_EDIT_FETCHED_DATA: {
      return {...state, suppilerEditList: action.data}
    } 
    case CUSTOMER_EDIT_FETCHED_DATA: {
      return {...state, customerEditList: action.data}
    } 
    case CUSTOMER_FETCHED_DATA: {
      return {...state, customerList: action.data}
    }  
    case TOOL_FETCHED_DATA: {
      return {...state, toolList: action.data}
    } 
    case TOOL_EDIT_FETCHED_DATA: {
      return {...state, toolEditList: action.data}
    } 
    default:{
      return state 
    }
	}
}