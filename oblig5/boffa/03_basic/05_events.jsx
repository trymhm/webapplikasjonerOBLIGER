import React, { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <NormalEvent />
      <KeyUpEvent />
    </div>
  );
}

// Vanlig event + prevent default

const NormalEvent = () => {
  function handleChange(e) {
    e.preventDefault();
    alert('Let me google it for you');
  }

  return (
    <a onClick={handleChange} href="https://nb.lmgtfy.com/">
      Let me google that for you
    </a>
  );
};

// KeyupEvent => utfordringer med polled

/*

Eventer i React er såkalte SyntheticEvent som er en wrapper rundt nettleseren sin native event.
Den fungerer som vanlig eventer i nettleseren men virker likt i alle nettlesere.

SyntheticEvent er "pooled" som betyr at eventobjektet blir gjenbrukt og alle propertiene på objektet
blir nullet ut etter at event callbacket har blitt kalt. 

Dette gjørs for økt performance men byr på noen utfordringer når man skal sette state. Setting av state skjer asynkront som gjør 
at man mister tilgang til eventet som trigget.

*/

const KeyUpEvent = () => {
  const [pressed, setPressed] = useState('');

  function handleKeyUp1({ key }) {
    // destruction av key verdien rett fra event objektet
    setPressed((p) => p + key);
  }

  function handleKeyUp2(e) {
    // mellomlagrer key verdien
    const { key } = e;
    setPressed((p) => p + key);
  }

  function handleKeyUp3(e) {
    // virker ikke da e.key ikke lengre er tilgjengelig når callback funksjonen har kjørt
    // ved å ha en callback inne i staten så kjører den asynkront og mister da eventet
    setPressed((p) => p + e.key);
  }

  function handleKeyUp4(e) {
    // slik jeg gjør det i dag, men får da kun siste verdi (kjører synkront)
    setPressed(e.key);
  }

  return (
    <>
      <br />
      <br />
      <br />
      <input autoFocus onKeyUp={handleKeyUp2} />
      <div>Pressed: {pressed}</div>
      <p>Message: {pressed}</p>
    </>
  );
};
