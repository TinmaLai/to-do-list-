import * as types from './../constants/ActionTypes';

var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    return s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

var compare = (a,b) =>{
        const nameA = a.ten;
        const nameB = b.ten;
        let comparison = 0;
        if(nameA > nameB) comparison = 1;
        else if(nameA < nameB) comparison = -1;
        else comparison = 0;
        return comparison;
}

var initialState = [];
var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.LIST_ALL:
			return state;
		case types.ADD_TASK:
			state.push({
				id: generateID(),
				ten: action.task.ten,
				status: action.task.status === 'true' ? true : false,
			})
			return [...state];
		case types.UPDATE_TASK:
			var idUpdate = action.task.id;
			for(let index in state){
				if(state[index].id === idUpdate){
					state[index].ten = action.task.ten;
					state[index].status = action.task.status === 'true' ? true : false;
				}
			}
			return [...state];
			// 1 2 3 4 5 -> 5 4 3 
			//   1
		case types.DELETE_TASK:
			var id = action.task.id;
			for(let index in state){
				if(state[index].id === id){
					var temp = [];
					for(let i = state.length - 1; i >= index; i--){
						temp.push(state.pop());
					}
					for(let i = temp.length - 2; i >= 0; i--){
						state.push(temp[i]);
					}
					return [...state];
				}
			}
			// return state;
		case types.SWITCH_STATUS:
			var idSwitch = action.task.id;
			for(let index in state){
				if(state[index].id === idSwitch){
					state[index].status = !state[index].status;
				}
			}
			return [...state];		
		case types.SORT_LIST:
			state = state.sort(compare);
			// console.log(state);
			return[...state];
		default:
			return state;
	}
};

export default myReducer;