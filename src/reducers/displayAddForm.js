import * as types from './../constants/ActionTypes';

var initialState = false;
var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.TOGGLE_ADD_FORM:
			return !state;
		case types.CLOSE_ADD_FORM:
			return false;
		default:
			return state;
	}
};

export default myReducer;