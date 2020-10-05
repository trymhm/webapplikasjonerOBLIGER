import React from 'react';

/**
 *
 *
 * Children brukes når man Wrapper en parent rundt et sett av komponenter.
 * Kort fortalt brukes children til å vise det som finnes mellom <Wrapper></Wrapper>
 * når komponenten Wrapper lages. Hva som er i mellom spiller ingen rolle.
 * Kan også passere props til elementene som ligger under wrapper elementet.
 * Viktig er å bruke props.children da det er reservert til dette.
 *
 *
 */

export default function App() {
  return (
    <>
      <ListDefault
        style={{ color: 'blue', border: '1px solid red' }}
        symbol="®"
      >
        <Child name="Tor" />
        <Child name="Odin" />
        <Child name="Loke" />
      </ListDefault>
    </>
  );
}

function Child({ name }) {
  return <i>Hello {name}</i>;
}

function ListDefault({ children, style, symbol }) {
  return (
    <ul>
      {children.map((child, i) => (
        <li style={style} key={i}>
          {child} {symbol}
        </li>
      ))}
    </ul>
  );
}

// Kan bruke alle Array metoder på denne

function ListArrayMethods({ children, style, symbol }) {
  return (
    <ul>
      {Array.from(children)
        .reverse()
        .filter((child) => child.props.name !== 'Loke')
        .map((child, i) => (
          <li style={style} key={i}>
            {child} {symbol}
          </li>
        ))}
    </ul>
  );
}
