import React from 'react';

export default function App() {
  return (
    <>
      <ComponentWithProp value="35" />
      <ComponentPropDeconstruct value="Marius" />
      <ComponentDefaultPropValue />
      <ComponentMultipleProps
        href="http://www.reactjs.com"
        rel="noopener noreferrer"
        target="_blank"
        title="Everything about React"
        style={{ color: 'teal', fontSize: 25 }}
      >
        React.js homepage
      </ComponentMultipleProps>
    </>
  );
}

// Props
function ComponentWithProp(props) {
  return (
    <>
      <pre>{JSON.stringify(props)}</pre>
      <h1>My age is: {props.value}</h1>
    </>
  );
}

// Deconstruct props basert på variabelnavnet
function ComponentPropDeconstruct({ value }) {
  return <h1>My name is {value}</h1>;
}

// Props med default verdi
function ComponentDefaultPropValue({ name = 'Climbing' }) {
  return <h1>My hobby is {name}</h1>;
}

// Flere props med child
function ComponentMultipleProps({ children, ...props }) {
  return <a {...props}>{children}</a>;
}
