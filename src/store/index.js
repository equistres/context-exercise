import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext()

class ContextStore extends Component {
   changeName =() => {
      this.setState({
         user: { name: 'Michael Jackson', age: '49', city: "Cementery", userName:"mjackson" }
      })
   }

   state={
      user: { name: 'John Doe', age: '37', city: "Manhattan", userName:"jdoe" },
      changeName: this.changeName
   }

   render() {
      return (
         <Provider value={this.state}>
            {this.props.comp}
         </ Provider>
      )
   }
}



export default Consumer;
export { ContextStore }
