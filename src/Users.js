import React, { Component, Fragment } from 'react'
import WrapperConsumer from './store'
import Toolbar from './toolbar'

class Users extends Component {
    render() {
        //descompongo la variable context en user y changeName
        const { context: { user, changeName } } = this.props
        return (
            <Fragment>
                <Toolbar/>
                <div>
                    <b>Information</b>
                    <br />
                    <p>Username: {user.userName}</p>
                    <p>Age: {user.age}</p>
                    <p>City: {user.city}</p>
                    <button onClick={changeName}>Cambiar</button>
                </div>
            </Fragment>
        )
    }
}

//envuelvo a la clase users en el wrapper que es el Consumer (HOC - High Order Component)
export default WrapperConsumer(Users)

