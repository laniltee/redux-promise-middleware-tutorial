import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as userActions from '../actions/userActions';

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
                <button onClick={() => this.props.getUsers()}>Hi</button>
                <p>Loaded Status: {this.props.users.loaded ? 'Loaded' : 'Not Loaded'}</p>
                <p>Loading Status: {this.props.users.loading ? 'Loading' : 'Not Loading'}</p>
                <p>Error Status: {this.props.users.error ? 'Error' : 'No Error'}</p>
                <div>
                    <h3>All Users</h3>
                    <ol>
                        {users}
                    </ol>
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
