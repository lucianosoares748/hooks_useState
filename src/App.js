import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { Component } from 'react';

function App() {
  // const { reverse } = this.state; <=========> this.state é usado apenas em componente de classe!
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    // const { reverse } = this.state; <=========> dentro da função do estado eu não preciso chamar novamente o estado!
    //por que ela ja está na linha 8 e eu tenho acesso a ela!
    // this.setState({ reverse: !reverse, }); <====> em componentes de função que a gente utiliza hooks eu não posso posso
    // utilizar o THIS, neste caso eu pego o setReverse da linha 8
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter} </h1>
        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>

        <p>
          <button type="button" onClick={handleIncrement}>
            Increment {counter}
          </button>
        </p>
      </header>
    </div>
  );
}

// class App extends Component {
//   state = {
//     reverse: false,
//   };

// handleClick = () => {
//   const { reverse } = this.state;
//   this.setState({ reverse: !reverse });
// };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

/* Para que a gente possa manusear os estados do componentes com classe, a gente precisa usar o 'this.state' diferente do componentes de
funções utilizando hooks para gerenciar os estados

por que foram criados os hooks?
Por que fica um código mais simples de se escrever, sem precisar ficar fazendo 'binds' de this o tempo todo criando métodos 'handleClick' e
etc ...*/

export default App;
