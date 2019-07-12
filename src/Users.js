import React, { Component, Fragment } from 'react'
import Consumer from './store'
import Toolbar from './toolbar'

export default class Users extends Component {
    render() {
        return (
            <Fragment>
            <Toolbar/>
            <Consumer>
                {
                    ({ user }) => (
                        <div>
                            <b>Information</b>
                            <br/>
                            <p>Username: {user.userName}</p>
                            <p>Age: {user.age}</p>
                            <p>City: {user.city}</p>
                        </div>
                    )
                }
            </Consumer>
            </Fragment>
        )
    }
}

