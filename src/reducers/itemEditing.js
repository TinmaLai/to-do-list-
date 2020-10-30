import * as types from './../constants/ActionTypes';

var initialState = {}
var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.UPDATE_ITEM:
			state = action.task;
			// console.log(state);
			return state;
		default:
			return state;
	}
};

export default myReducer;