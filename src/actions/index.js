import * as types from './../constants/ActionTypes';

export const listAll = () => {
	return {
		type: types.LIST_ALL
	}
}

export const addTask = (task) => {
	return {
		type: types.ADD_TASK,
		task,
	}
}

export const toggleAddForm = () => {
	return{
		type: types.TOGGLE_ADD_FORM
	}
}

export const closeAddForm = () => {
	return{
		type: types.CLOSE_ADD_FORM
	}
}

export const toggleUpdateForm = () => {
	return{
		type: types.TOGGLE_UPDATE_FORM
	}
}
export const closeUpdateForm = () => {
	return{
		type: types.CLOSE_UPDATE_FORM
	}
}

export const updateItem = (task) => {
	return{
		type: types.UPDATE_ITEM,
		task,
	}
}

export const updateTask = (task) => {
	return{
		type: types.UPDATE_TASK,
		task,
	}
}

export const deleteTask = (task) => {
	return{
		type: types.DELETE_TASK,
		task,
	}
}

export const switchStatus = (task) => {
	return{
		type: types.SWITCH_STATUS,
		task,
	}
}
export const searchInfor = (task) => {
	return{
		type: types.SEARCH_INFOR,
		task,
	}
}

export const searchTask = (task) => {
	return{
		type: types.SEARCH_TASK,
		task,
	}
}

export const sortList = () => {
	return{
		type: types.SORT_LIST
	}
}


