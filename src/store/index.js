import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext()

class ContextStore extends Component {
   //FUNCION DE CAMBIO DE VALORES
   changeName = () => {
      this.setState({
         user: { name: 'Michael Jackson', age: '49', city: "Cementery", userName: "mjackson" }
      })
   }

   addPost =()=>{
      this.setState({
         posts:[...this.state.posts, {id:6,title:"Post 6"}]
      })
   }

   state = {
      user: { name: 'John Doe', age: '37', city: "Manhattan", userName: "jdoe" },
      changeName: this.changeName,
      posts:[
         {id:1,title:"Post 1"},
         {id:2,title:"Post 2"},
         {id:3,title:"Post 3"},
         {id:4,title:"Post 4"},
         {id:5,title:"Post 5"}
      ],
      addPost: this.addPost
   }

   render() {
      return (
         <Provider value={this.state}>
            {this.props.comp}
         </ Provider>
      )
   }
}
//ESTE WRAPPER ES EL QUE TERMINA ENVOLVIENDO LOS COMPONENTES QUE LE ENVIAMOS, ASI TE DA ACCESO AL CONSUMER DEL CONTEXTO
const WrapperConsumer = (Component) => {
   return (props) => {
      return (
         <Consumer>
            {
               context => <Component {...props} context={context}/>
            }
         </Consumer>
      )
   }
}



export default WrapperConsumer;
export { ContextStore }
