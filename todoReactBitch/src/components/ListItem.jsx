import React from 'react';

const ListItem = ({
  children,
  organisasjonsnummer,
  navn,
  hjemmeside,
  forretningsadresse,
}) => (
  <>
    <article>
      <h4>Orgnr: {organisasjonsnummer}</h4>
      {hjemmeside ? (
        <a href={`https://${hjemmeside}`}>{navn}</a>
      ) : (
        <p>Navn: {navn}</p>
      )}
      <p>{forretningsadresse.kommune}</p>
    </article>
    <br />
    {children}
  </>
);

export default ListItem;
