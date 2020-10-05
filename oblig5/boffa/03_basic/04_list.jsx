import React from 'react';

export default function App() {
  return (
    <div className="App">
      <p>
        Render List. Bruker ikke "for loop" syntaxen men map. Må bruke "key" på
        wrapper elementet keyen gjør rendringen raskere, oppdateringene raskere
        og unngår å gi console feil.
      </p>
      <p>
        "key" må være unik og helst ikke (index) (index er ikke stabil). Hvis
        f.eks et element slettes eller bytter plass mistes oversikten). React
        bruker keyen til å identifisere hva som har blitt endret slik at den
        raskere kan oppdatere listen (ex på remove)
      </p>
      <hr />
      <Component
        values={[
          { id: 1, name: 'Marius' },
          { id: 2, name: 'Hans' },
        ]}
      />
    </div>
  );
}

function Component({ values }) {
  return (
    <>
      <h1>Students</h1>
      <ul>
        {values.map((value) => (
          <li key={value.id}>{value.name}</li>
        ))}
      </ul>
    </>
  );
}
