import React from 'react';

export default function App() {
  return (
    <>
      <HelloWorldComponent />
      <Component />
      <ComponentWithFragment />
      <ComponentWithFragmentShort />
    </>
  );
}

// Render av en enkelt komponent

function Component() {
  return 'Hello World!';
}

// Render flere elementer => går ikke uten videre og må bruke fragments
// Fragmentet blir ikke en del av DOM
function ComponentWithFragment() {
  return (
    <>
      <h1>Med Fragment</h1>
      <p>Langversjon bruker React som prefix og .Fragment etter</p>
    </>
  );
}

// Kortversjonen av Fragment
function ComponentWithFragmentShort() {
  return (
    <>
      <h1>Fragment kortversjon</h1>
      <p>Enklere og penere</p>
    </>
  );
}

const divStyle = {
  color: 'blue',
  maxWidth: '300px',
  border: '1px solid red',
};

const HelloWorldComponent = () => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <section>
      <div style={divStyle}>Hello World!</div>
      <p style={{ width: 20, height: '20vh' }}>Test</p>
      <button
        type="button"
        onClick={handleClick}
        style={{
          border: '1px solid #1a202c',
          padding: '8px',
          transition: 'all 0.1s ease-in',
          color: 'blue',
          width: 200,
          height: 50,
        }}
      >
        {false ? 'Unlike' : 'Like'}
      </button>
    </section>
  );
};
