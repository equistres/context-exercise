import React, { Component } from 'react'
import Consumer from './store'

export default class Users extends Component {
    render() {
        return (
            <Consumer>
                {
                    ({ user: { name } }) => (
                        <div>
                            usersssss {name}
                        </div>
                    )
                }
            </Consumer>
        )
    }
}

