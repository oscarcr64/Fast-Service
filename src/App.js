import React,{Component} from 'react';

//son ciomponentes
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
 
}

export default App;
