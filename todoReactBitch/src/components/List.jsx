import React from 'react';
import ListItem from './ListItem';

const List = ({ list }) => (
  <section>
    {list &&
      list.map((company) => (
        <ListItem key={company.organisasjonsnummer} {...company}>
          <a href="https://brreg.no">Gå til brreg.no</a>
        </ListItem>
      ))}
  </section>
);

export default List;
