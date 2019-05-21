import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions';
import {WiredCombo} from "wired-combo";
import {WiredSpinner} from "wired-spinner"


class UsersComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        const users = this.props.users.data.map(user =>
            <wired-item value={user.id} key={user.id}>{user.name}</wired-item>
        );
        return (
            <div>
                {this.props.users.loading && <wired-spinner id="sp" spinning duration="1000"/>}
                <br/>
                <wired-combo id="combo">
                    {users}
                </wired-combo>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(userActions.getAllUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersComponent);
