import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions';
import SelectUsers from "./SelectUsers";
import UserDetails from "./UserDetails";

class UsersComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        const users = this.props.users.data.map(user =>
            <li key={user.id}>{user.name}</li>
        );
        return (
            <div>
                <button onClick={() => this.props.getUsers()}>Load All Users</button>
                <p>Loaded Status: {this.props.users.loaded ? 'Loaded' : 'Not Loaded'}</p>
                <p>Loading Status: {this.props.users.loading ? 'Loading' : 'Not Loading'}</p>
                <p>Error Status: {this.props.users.error ? 'Error' : 'No Error'}</p>
                <div>
                    <h3>All Users</h3>
                    <ol>
                        {users}
                    </ol>
                </div>
                <div>
                    <h3>Select A User</h3>
                    <SelectUsers/>
                </div>
                <div>
                    <h3>Selected User Details</h3>
                    <UserDetails/>
                </div>
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
