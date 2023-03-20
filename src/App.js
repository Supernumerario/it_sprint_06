import Escena from './components/escena/Escena';
import textdata from './text';
import React from 'react';

const buttonStyle = {
  'width': '50%',
  'textAlign': 'center',
  'fontSize': '20px',
  'fontFamily': 'sans-serif',
  'padding': '16px'
}
  
function App() {

  const [ position, setPosition ] = React.useState(0);

  function navBack () {
    if (position > 0) { setPosition ( prevPosition => { return prevPosition -1 }) }
  }
  
  function navNext () {
    if (position < 3) { setPosition ( prevPosition => { return prevPosition +1 }) }
  }

  return (
    <div>
      <button onClick={navBack} style={buttonStyle}>Anterior</button>
      <button onClick={navNext} style={buttonStyle}>Següent</button>
      <Escena text={textdata} activePosition={position} />
    </div>
  );
}

export default App;