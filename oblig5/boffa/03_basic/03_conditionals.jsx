import React from 'react';

export default function App() {
  return <Component name="hei" value="value" />;
}

/*

if: true && <p>Yes</p>
if-not: bool || <p>No</p>
if-else: bool ? <p>Yes</p> : <p>No</p>
if-else-multiple:  bool ? <><p>Yes</p><p>Flere her</p></> : <p>No</p>

*/

// IF-Else

function Component({ name, value }) {
  return (
    <div>
      {name ? (
        <>
          <p>Name er true</p>
          <p>En annen linje her inne</p>
        </>
      ) : (
        <p>Name er false</p>
      )}
    </div>
  );
}
