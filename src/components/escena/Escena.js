function Escena(props) {

  const textLines = props.text.map(line => {
    return (
      <p key={line.id}>{line.text}</p>
    );
  });

  return (
    <div>
      {textLines}
    </div>
  );
}

export default Escena;