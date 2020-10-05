import React from 'react';

export default function App() {
  return (
    <div className="App">
      {/* <BasicForm /> */}
      {/* <TextArea /> */}
      {/* <SelectSingle /> */}
      {/* <SelectMultiple /> */}
    </div>
  );
}

const BasicForm = () => {
  const [value, setValue] = React.useState('Default');

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <input defaultValue={value} onChange={handleChange} />
      <input value={value} onChange={handleChange} />
    </>
  );
};

function TextArea() {
  const [text, setText] = React.useState('Lorem ipsum data');

  function handleChange(e) {
    setText(e.currentTarget.value);
  }

  return (
    <>
      <textarea autoFocus onChange={handleChange} value={text} />
      <pre>{text}</pre>
    </>
  );
}

// select single

function SelectSingle() {
  const [selected, setSelected] = React.useState('train');

  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <>
      <select onChange={handleChange} value={selected}>
        <option value="bike">Bike</option>
        <option value="car">Car</option>
        <option value="train">Train</option>
      </select>
      <pre>{selected}</pre>
    </>
  );
}

// select multiple

function SelectMultiple() {
  const [selected, setSelected] = React.useState(['pizza', 'hamburger']);

  function handleChange(e) {
    console.log([...e.target.selectedOptions]);
    setSelected(
      [...e.target.selectedOptions].map((selection) => selection.value)
    );
  }

  return (
    <>
      <select multiple onChange={handleChange} value={selected}>
        <option value="pizza">Pizza</option>
        <option value="hamburger">Hamburger</option>
        <option value="vegan">Vegan</option>
      </select>
      <pre>{selected}</pre>
    </>
  );
}
