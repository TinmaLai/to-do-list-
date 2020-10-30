import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component{
    switchStatus = () => {
        var {task} = this.props;
        this.props.onSwitchStatus(task);
    }

    toggleUpdateForm = () => {
        var {task} = this.props;
        this.props.onToggleUpdateForm();
        this.props.onItemEditing(task);
    }

    deleteTask = () => {
        var {task} = this.props;
        this.props.onDeleteTask(task);
    }

    render(){
        var {task,index} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{task.ten}</td>
                <td onClick={this.switchStatus}>{task.status === true ? 'Kích hoạt' : 'Chưa kích hoạt'}</td>
                <td>
                    <button type="button" onClick={this.toggleUpdateForm}>Sửa</button>
                    <button onClick={this.deleteTask} style={{marginLeft: '10px'}}>Xóa</button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        displayUpdateForm: state.displayUpdateForm,
        itemEditing: state.itemEditing,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleUpdateForm: () => {
            dispatch(actions.toggleUpdateForm())
        },
        onItemEditing: (task) => {
            dispatch(actions.updateItem(task));
        },
        onDeleteTask: (task) => {
            dispatch(actions.deleteTask(task));
        },
        onSwitchStatus : (task) => {
            dispatch(actions.switchStatus(task));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
