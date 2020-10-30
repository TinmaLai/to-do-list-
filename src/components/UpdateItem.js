import React, {Component} from 'react';
import  './AddItem.css';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class UpdateItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            id: this.props.itemEditing.id,
            ten: '',
            status: false,
    
        }
    }

    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value,
            id: this.props.itemEditing.id
        })
    }
    Change = (event) =>{

        this.props.onUpdateTask(this.state);
        event.preventDefault();
    }

    Hidden = () => {
        this.props.onCloseUpdateForm();
    }
    render(){
        
        return(
            <form onSubmit={this.Change} style={{border: 'solid', borderRadius: '5px',marginRight: '20px',marginBottom: '20px'}}
                className={this.props.displayUpdateForm === true ? 'active' : 'noneActive'}
                >
                <h4>Cập nhật công việc</h4>
                <button onClick={this.Hidden}>x</button>
                <br/>
                <label>Tên: </label>
                <br/>
                <input  name="ten" value={this.state.ten} onChange={this.handleChange} />
                <br/>
                <label htmlFor="">Trạng thái: </label>
                <br/>
                <select   name="status" value={this.state.status}  onChange={this.handleChange} >
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Chưa kích hoạt</option>
                </select>
                <br/>

                <input type="submit" value="Lưu lại"  style={{marginLeft: '20px', marginRight: '10px'}}/>
                <button type="button" onClick={this.Hidden}>Hủy</button>
                
            </form>
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
        onCloseUpdateForm: () => {
            dispatch(actions.closeUpdateForm())
        },
        onUpdateTask: (task) => {
            dispatch(actions.updateTask(task))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateItem);
