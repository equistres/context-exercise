import React from 'react'
import WrapperConsumer from './store'
import { Link } from 'react-router-dom';

const Toolbox = ({ context: { user } }) => (
   <div>
      <h1>Bienvenido {user.name}</h1>
      <br />
      <Link to='/'>Home</Link> | <Link to='/users'>Users</Link> | <Link to='/posts'>Posts</Link>
   </div>
)
export default WrapperConsumer(Toolbox)