import React, {Component} from 'react';
import  './AddItem.css';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class AddItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
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
        })
    }
    Add = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state);
    }

    HiddenAdd = () => {
        this.props.onHiddenAdd();
    }

    render(){
        return(
            <form onSubmit={this.Add} style={{border: 'solid', borderRadius: '5px',marginRight: '20px'}}
                 className={this.props.displayAddForm === true ? 'active' : 'noneActive'}
                >
                <h4>Thêm công việc</h4>
                <button onClick={this.HiddenAdd}>x</button>
                <br/>
                <label>Tên: </label>
                <br/>
                <input name="ten" value={this.state.ten} onChange={this.handleChange} />
                <br/>
                <label htmlFor="">Trạng thái: </label>
                <br/>
                <select name="status" value={this.state.status} onChange={this.handleChange} >
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Chưa kích hoạt</option>
                </select>
                <br/>

                <input type="submit" value="Lưu lại"  style={{marginLeft: '20px', marginRight: '10px'}}/>
                <button type="button" onClick={this.HiddenAdd}>Hủy</button>
                
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        displayAddForm: state.displayAddForm
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        onHiddenAdd: () => {
            dispatch(actions.closeAddForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
