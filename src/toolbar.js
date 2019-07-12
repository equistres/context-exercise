import React from 'react'
import Consumer from './store'
import {Link} from 'react-router-dom';

export default () => (
   <Consumer>
      {
         ({user:{name}}) => (
            <div>
               <h1>Bienvenido {name}</h1>
               <br/>
               <Link to='/users'>Users</Link>
            </div>
         )
      }
   </Consumer>
)
