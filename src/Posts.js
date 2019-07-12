import React, { Component, Fragment } from 'react'
import WrapperConsumer from './store'
import Toolbar from './toolbar'

class Posts extends Component {
    render() {
        //descompongo la variable context en user y changeName
        const { context: { posts, addPost } } = this.props
        return (
            <Fragment>
                <Toolbar />
                {
                    posts.map((item, key) => {
                        return (
                            <div>
                                <div key={key}>
                                    <p>PostId:{item.id}</p>
                                    <p>PostTitle:{item.title}</p>

                                </div>
                                
                            </div>
                        )
                    })
                    
                }
                <button onClick={addPost}>Agregar post</button>
            </Fragment>
        )
    }
}

//envuelvo a la clase users en el wrapper que es el Consumer (HOC - High Order Component)
export default WrapperConsumer(Posts)

