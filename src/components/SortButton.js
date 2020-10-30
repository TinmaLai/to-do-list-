import React, {Component} from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class SortButton extends Component{
	sort = () => {
		this.props.onSortList();
	}
    render(){
        return(
            <div>
                <button onClick={this.sort} style={{backgroundColor:'blue', color:'white',border:'none', height: '35px'}}>Sắp xếp</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{

    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortList: () => {
            dispatch(actions.sortList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SortButton);
