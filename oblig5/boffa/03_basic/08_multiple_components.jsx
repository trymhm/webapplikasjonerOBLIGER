import React, { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

/**
 *
 * Det er sjelden man klarer seg med en komponent og som nevnt når jeg snakket om komponenter
 * så er det hensiktsmessige å skille komponenter fra hverandre.
 *
 * Vi ender da opp med parents, siblings og children
 *
 */

const Parent = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <h2>Parent: {state}</h2>
      <Sibling value={state} />
      <Child value={state} setState={setState} />
    </>
  );
};

const Child = ({ value, setState }) => {
  const passedDownHandler = (e) => {
    setState((p) => p + 1);
  };
  return (
    <>
      <h2>Child: {value}</h2>
      <ChildOfChild value={value} handleChange={passedDownHandler} />
    </>
  );
};

const ChildOfChild = ({ value, handleChange }) => (
  <>
    <h2>ChildOfChild: {value}</h2>
    <button type="button" onClick={() => handleChange()}>
      I will update the sibling
    </button>
  </>
);

const Sibling = ({ value }) => <h2>Sibling: {value}</h2>;
