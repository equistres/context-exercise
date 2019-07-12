import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext()

class ContextStore extends Component {
   render() {
      return (
         <Provider value={{ user: { name: 'John Doe', age: '37', city: "Manhattan", userName:"jdoe" } }}>
            {this.props.comp}
         </ Provider>
      )
   }
}



export default Consumer;
export { ContextStore }
