import React, { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <DefaultState />
      <BatchedState />
      <MultipleStateWithCallback />
      <Parent />
      <ParentHandleState />
    </div>
  );
}

/*

const [value, setValue] = useState('Initial Value')
setValue => brukes til å sette staten
Initial value er verdien du starter med
Hvis du skal oppdatere flere verdier er det mest hensiktsmessig å bruke array eller objekter

const initialState = {
	prop1: 'value1',
	prop2: 'value2,
	prop3: 0
}

const [state, setState] = useSate(initialState)

*/

// simple state

function DefaultState() {
  const [name, setName] = useState('default');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>My name is: {name}</h1>
    </>
  );
}

// Batched stateupdates

const BatchedState = () => {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // Updates er batched grunnet performance
    // React "ser" kun siste stateoppdatering
    setCount(count + 1);
    setCount(count + 5);
    // Hvis vi hadde lagt til setCount(3) så ville ikke de over repsondert lengre. State blir da 3.
  }

  return <button onClick={handleClick}>{count} times</button>;
};

// Multiple stateupdate trenger callback-funksjoner for å sette state

function MultipleStateWithCallback() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    // bruker callbacks
    setCount((c) => c + 1);
    setCount((c) => c + 5);
  }

  return <button onClick={handleClick}>{count} times</button>;
}

// Ved bruk av eventer må man være obs på hva kalling av evneter og setting av state fører til

/*

Når man bruker en parent som oppdaterer state og fjerner et element fra DOM med å toggle
synelighet så medfører det at Child elementet blir laget på nytt. I slike tilfeller må
state bo hos parent som fortsatt er mounted til DOMen. Ellers må vi bruke mer
global håndtering av state.

Kan se av eksempel nedenfor at key-verdien er ny for alle Childelementer.

*/

function Child() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }
  return <p onClick={handleClick}>Clicked {count}</p>;
}

function Parent() {
  const [showClickMe, setShowClickMe] = React.useState(true);
  const [id, setId] = React.useState(0);

  function handleClick() {
    setId((i) => i + 1);
    setShowClickMe((scm) => !scm);
  }

  return (
    <>
      <button onClick={handleClick}>Change visibility</button>
      <br />
      {showClickMe && <Child key={id} />}
    </>
  );
}

// Flytte state til parent

function ChildParentHandleState(props) {
  return <p onClick={() => props.updateCount()}>Clicked {props.count}</p>;
}

function ParentHandleState() {
  const [showClickMe, setShowClickMe] = React.useState(true);
  const [id, setId] = React.useState(0);
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setId((i) => i + 1);
    setShowClickMe((scm) => !scm);
  }

  function updateCount() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Change visibility</button>
      <br />
      {showClickMe && (
        <ChildParentHandleState
          key={id}
          count={count}
          updateCount={updateCount}
        />
      )}
    </>
  );
}
