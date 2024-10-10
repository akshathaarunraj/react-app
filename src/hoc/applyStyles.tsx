const applyStyles = (OriginalComponent: React.FC) => {
  // function is  taking in a component as input and returning a new component as output
  // creating a new fn comp
  const NewComponent = () => {
    const divStyle = {
      color: "red",
      fontSize: "20px",
      fontWeight: "bold",
      backgroundColor: "yellow",
      border: "solid 5px red",
      margin: "10px",
    };

    return (
      <div style={divStyle}>
        <OriginalComponent />
      </div>
    );
  };

  return NewComponent;
};

export default applyStyles;
