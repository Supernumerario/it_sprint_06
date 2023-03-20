import styled from 'styled-components'

const TextLine = styled.div`
  border: 2px solid black;
  border-radius: 32px;
  padding: 16px;
  margin: 8px;
  text-align: center;
  font-size: 20px;
  font-family: sans-serif;
`;

function Escena(props) {

  const textLines = props.text.map(line => {
    return (
      <TextLine
        key={line.id}
        style={{ backgroundColor: props.activePosition === line.id ? "pink" : "transparent" }}>
          {line.text}
      </TextLine>
    );
  });

  return (
    <div>
      {textLines}
    </div>
  );
}

export default Escena;