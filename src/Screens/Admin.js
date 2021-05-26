import React, { Component } from 'react';
import Orders from '../components/Order/Orders';

class Admin extends Component {
    render() {
        return (
            <div>
                <p>Orders</p>
                <Orders/>
            </div>
        );
    }
}

export default Admin;