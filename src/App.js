import logo from './logo.svg';
import './App.css';
import { useState } from 'react ';

function App() {
  // const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    // this.setState({ reverse: !reverse });
    setReverse(!reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

// class App extends Component {
//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//           <button
//             type="button"
//             onClick={() => this.setState({ reverse: !reverse })}
//           >
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
