import Escena from './components/escena/Escena';
import pagedata from './text';
import React from 'react';

const buttonStyle = {
  'width': '50%',
  'textAlign': 'center',
  'fontSize': '20px',
  'fontFamily': 'sans-serif',
  'padding': '16px'
}

const startStyle = {
  'width': '100%',
  'textAlign': 'center',
  'fontFamily': 'sans-serif',
  'marginTop': '120px'
}

const pageStyle = { 'textAlign': 'center' }

console.log(pagedata[1].img);

function App() {

  const [ position, setPosition ] = React.useState(0);
  const [ started, setStarted ] = React.useState(false);

  function navBack () {
    if (position > 0) { setPosition ( prevPosition => { return prevPosition -1 }) }
  }
  
  function navNext () {
    if (position < 3) { setPosition ( prevPosition => { return prevPosition +1 }) }
  }

  if (!started) {
    return (
      <div style={startStyle}>
        <h1>Benvingut al viatge sideral!</h1>
        <button onClick={() => setStarted(true)}>Iniciar aplicació</button>
      </div>
    );
  } else {
    return (
      <div style={pageStyle}>
        <button onClick={navBack} style={buttonStyle}>Anterior</button>
        <button onClick={navNext} style={buttonStyle}>Següent</button>
        <Escena text={pagedata} activePosition={position} />
        <img src={pagedata[position].img} alt={pagedata[position].text}></img>
      </div>
    );
  }

}

export default App;