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
                    value => (
                        <div>
                            <b>Information</b>
                            <br/>
                            <p>Username: {value.user.userName}</p>
                            <p>Age: {value.user.age}</p>
                            <p>City: {value.user.city}</p>
                            <button onClick={value.changeName}>Cambiar</button>
                        </div>
                    )
                }
            </Consumer>
            </Fragment>
        )
    }
}

