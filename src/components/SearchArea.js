import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class SearchArea extends Component{

    handleChange = (event) => {
        // event.preventDefault();
        this.props.onSearchInfor(event.target.value);
    }

    render(){
        return(
            <div>
                <form>
                    <input onChange={this.handleChange} style={{height: '30px'}} placeholder="Nhập từ khóa..."/>
                    <button onClick={this.searchTask} type="button" style={{backgroundColor: 'blue',color: 'white', marginRight: '10px', border:'none',height: '35px'}}>Tìm</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchInfor: state.searchInfor,

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        onSearchInfor: (event) => {
            dispatch(actions.searchInfor(event))
        },
        onSearchTask: (event) => {
            dispatch(actions.searchTask(event))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchArea);
