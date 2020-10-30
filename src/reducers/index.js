import { combineReducers } from 'redux';
import tasks from './tasks';
import displayAddForm from './displayAddForm';
import displayUpdateForm from './displayUpdateForm';
import itemEditing from './itemEditing';
import searchInfor from './searchInfor';

const myReducer = combineReducers({
	tasks,
	displayAddForm,
	displayUpdateForm,
	itemEditing,
	searchInfor,
}) 
export default myReducer;