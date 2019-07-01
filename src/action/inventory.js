import axios from "axios"
import { headers } from "config/config"
// ======================Supplier ==================//

export const SUPPILER_FETCHED_DATA = 'SUPPILER_FETCHED_DATA';
export const SUPPILER_EDIT_FETCHED_DATA = 'SUPPILER_EDIT_FETCHED_DATA';

export const supplierData = data => ({
    type: SUPPILER_FETCHED_DATA,
    data
});
export const supplierEditData = data => ({
    type: SUPPILER_EDIT_FETCHED_DATA,
    data
});

export const supplierList = () => dispatch => {
	let data = {
		"NeededList" : "active"
	}
	return axios.post("/services/inventory/supplier/list" , data, {headers: headers})
	.then(res => res.data.suppliersList)
	.then(resData => {
		dispatch(supplierData(resData));
	})
}
export const fetchList = data => dispatch => {
	return axios.post("/services/inventory/supplier/fetch" , data, {headers: headers})
	.then(res => {
		return res.data
	})
}
export const editSupplier = data => dispatch => {
	return axios.post("/services/inventory/supplier/edit" , data, {headers: headers})
}
export const fetchEdit = data => dispatch => {
	 axios.post("/services/inventory/supplier/fetch" , data, {headers: headers})
	.then(res => res.data.supplierDetails)
	.then(resData => {
		console.log(resData)
		dispatch(supplierEditData(resData));
	})
}
//======================================================================================================

//=========================TOOL=========================================

export const TOOL_FETCHED_DATA = 'TOOL_FETCHED_DATA';
export const TOOL_EDIT_FETCHED_DATA = 'TOOL_EDIT_FETCHED_DATA';

export const toolData = data => ({
    type: TOOL_FETCHED_DATA,
    data
});
export const toolEditData = data => ({
    type: TOOL_EDIT_FETCHED_DATA,
    data
});

export const toolList = () => dispatch => {
	let data = {
		"NeededList" : "active"
	}
	return axios.post("/services/inventory/tool/list" , data, {headers: headers})
	.then(res => res.data.toolsList)
	.then(resData => {
		dispatch(toolData(resData));
	})
}
export const createTool = data => dispatch => {
	return axios.post("/services/inventory/tool/create" , data, {headers: headers})
}
export const editTool = data => dispatch => {
	return axios.post("/services/inventory/tool/edit" , data, {headers: headers})
}
export const fetchEditTool = data => dispatch => {
	 axios.post("/services/inventory/tool/fetch" , data, {headers: headers})
	.then(res => res.data.toolDetails)
	.then(resData => {
		dispatch(toolEditData(resData));
	})
}

//=========================Customer=========================================

export const CUSTOMER_FETCHED_DATA = 'CUSTOMER_FETCHED_DATA';
export const CUSTOMER_EDIT_FETCHED_DATA = 'CUSTOMER_EDIT_FETCHED_DATA';

export const customerData = data => ({
    type: CUSTOMER_FETCHED_DATA,
    data
});
export const customerEditData = data => ({
    type: CUSTOMER_EDIT_FETCHED_DATA,
    data
});

export const customerList = () => dispatch => {
	let data = {
		"NeededList" : "active"
	}
	return axios.post("/services/inventory/customer/list" , data, {headers: headers})
	.then(res => res.data.customersList)
	.then(resData => {
		dispatch(customerData(resData));
	})
}
export const createCustomer = data => dispatch => {
	return axios.post("/services/inventory/customer/create" , data, {headers: headers})
}

export const fetchEditCustomer = data => dispatch => {
	 axios.post("/services/inventory/customer/fetch" , data, {headers: headers})
	.then(res => res.data.customerDetails)
	.then(resData => {
		dispatch(customerEditData(resData));
	})
}
export const editCustomer = data => dispatch => {
	return axios.post("/services/inventory/customer/edit" , data, {headers: headers})
}