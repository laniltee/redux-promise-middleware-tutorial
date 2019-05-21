import React, {Component} from 'react';
import {connect} from "react-redux";
import * as userActions from "../actions/userActions";
import { WiredCard } from "wired-card"

class UserDetails extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const user = this.props.users.selectedUser;
        return (
            <wired-card elevation="3">
                {user.name && <p>Select a user please </p>}
                <h4>{user.name}</h4>
                <p><a href={user.website}>{user.website}</a></p>
                <p>{user.email}</p>
            </wired-card>
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
)(UserDetails);
