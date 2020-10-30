import React, {Component} from 'react';
import './App.css';
import SearchArea from './components/SearchArea';
import SortButton from './components/SortButton';
import TaskItem from './components/TaskItem';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component{
    constructor(props){
        super(props);
    }
    
    toggleAddForm = () => {
        this.props.onToggleAddForm();
    }       
    render(){
        var {tasks} = this.props;  
        if(this.props.searchInfor){
            tasks = tasks.filter((task) => {
                return task.ten.toLowerCase().indexOf(this.props.searchInfor) !== -1;
            });
        }
        var elmTasks = tasks.map((task,index) => {         
            return <TaskItem task={task} 
                         key={task.id}
                         index={index} 
                         /> 
                   
        });
        return(

            <div style={{display: 'flex', flexDirection: 'column',height: 'auto', width: 'auto', alignItems:'center'}}>
                <h1>Quản Lý Công Việc</h1>
                <br/>
                <button
                    style={{backgroundColor: 'blue', borderStyle:'none', borderRadius: '15px', color: 'white', height: '50px', width: '200px'
                }}    
                    onClick={this.toggleAddForm}
                >+ Thêm công việc</button>
                <div style={{display: 'flex',flexDirection: 'row',marginTop: '20px'}}>
                    <SearchArea/>
                    <SortButton/>
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <div>
                        <UpdateItem />
                        <AddItem/>
                    </div>
                    <table border='1' style={{height:'auto',width: '800px',marginTop: '20px'}}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elmTasks}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        displayAddForm: state.displayAddForm,
        searchInfor: state.searchInfor,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        onToggleAddForm: () => {
            dispatch(actions.toggleAddForm());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

