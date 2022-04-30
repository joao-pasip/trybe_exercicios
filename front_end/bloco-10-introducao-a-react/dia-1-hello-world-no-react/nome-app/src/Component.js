import React from "react";

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
    );
  }

  
  class Component extends React.Component {
    render() {
      let compromises = ['study', 'work', 'play', 'happy'];
      return (
        <ul>{compromises.map((element) => Task(element))}</ul>
    );
  }
}

// export default Component;