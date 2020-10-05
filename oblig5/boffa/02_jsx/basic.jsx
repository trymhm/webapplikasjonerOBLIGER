//Babeljs.io

// React
const Component = () => <h1 className='class'>My header</h1>

// Runtime generert kode
var Component = function Component() {
  return React.createElement("h1", {
    className: "class"
  }, "My header");
};

// Custom komponent (må ha stor forbokstav for at JSX skal skjønne hva det er)
// Små bokstaver tolkes som HTML-elementer

const ChildComponent = (props) => <h1>Hey, {props.name}</h1>
const ParentComponent = () =>  <ChildComponent name='Marius Wallin' />

// Runtime generert

var ChildComponent = function ChildComponent(props) {
  return React.createElement("h1", null, "Hey, ", props.name);
};

var ParentComponent = function ParentComponent() {
  return React.createElement(ChildComponent, {
    name: "Marius Wallin"
  });
};
