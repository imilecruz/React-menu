import React from 'react';
import './App.css';
import Menu from './component/menu-hamburguer';
// import Outono from '.component/outono';
// import Verao from '.component/verao';
// import Primavera from '.component/primavera';
// import Inverno from '.component/inverno'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      estacoes: [
        'Outono',
        'Verao',
        'Primavera',
        'Inverno'
      ],
      selecionada: '',
    }
  }

  aparece = () => (
    console.log ('fala mundão!')
  )


  render() {
    return (
      <div className='App'>
        <Menu estacoes={this.state.estacoes}/>
        <button onClick={this.aparece}>click</button> 
      </div>  
    );
  }
  
}

export default App;
