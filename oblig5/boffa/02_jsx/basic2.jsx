// Eksempel på bruk av JSX
// https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABABQIYCcCmYoAoCUiA3gFCKJZQjpIA8AwgBYwA2AJogG6osiYC8RAEwBfRAHoAfCREkSoSLASImrNrgAO6OBoDOhUhUxUaiWowCMkgLIBPLjz6IYugFzEtO3QDpuvTCIAhLTilpIA3DJyAEqYqNAAIgDy1t5YYGyY6Li0aOlQEpL44UA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.11.6&externalPlugins=

/**
 *
 * string - eks under ender opp med det samme da inputen i {} er en string
 *
 */

// direct
<input type="button" />;

// indirect
<input type={"button"} />;


React.createElement("input", {
  type: "button"
});

React.createElement("input", {
  type: "button"
});

/**
 *
 * number => må ha {}
 *
 */

<CustomComp value={123} />;

/**
 *
 * boolean => må ha {}
 *
 */

// boolean
<input type="button" disabled={true} />;
<input type="button" disabled={false} />;

/**
 *
 * object => må wrappes inn i dobbel {{}} for å bli identifisert som objekt
 *
 */

<CustomComp obj={{ val1: 1, val2: 2 }} />;

/**
 *
 * events => Håndtere eventer med {} og uten () da vi peker til referansen, kjører ikke metoden
 *
 */

<CustomComp onClick={handleClick} />;

/**
 *
 * conditionals
 *
 */

// Med inline if sjekking
<CustomComp attribute={true ? customVar : 'randomText'} />;

// Inline IF inne i komponent

<CustomComp>
	{true ? <Comp1 /> : <Comp2 />}
</CustomComp>

/**
 *
 * kommentarer
 *
 */

<Element /* comment */></Element> // Another comment
<Element>{/* comment */}</Element>

/**
 *
 * CSS - inline styles
 * Ved bruk av CSS og tallverdier er px satt automatisk.
 * vh og % må være string
 *
 */

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

const HelloWorldComponent = () => {
  return (
		<section>
		<div style={divStyle}>Hello World!</div>
		<p> style={{width:20, height: '100vh'}}>Test</p>
		<button
            type="button"
            onClick={() => onClick(item)}
            style={{
              border: '1px solid #1a202c',
              padding: '8px',
              transition: 'all 0.1s ease-in'
            }}
          >
            {true ? 'Unlike' : 'Like'}
          </button>
		</section>
	)
}
